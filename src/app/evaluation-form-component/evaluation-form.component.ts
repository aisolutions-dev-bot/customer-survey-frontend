import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  computed,
  inject,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject, catchError, switchMap, takeUntil } from 'rxjs';
import { EMPTY } from 'rxjs';
import { EvaluationDistributionService } from '../services/evaluation-distribution.service';
import { EvaluationRatingsService } from '../services/evaluation-ratings.service';
import { FormQuestionsService, FormQuestion } from '../services/form-questions.service';
import { StaffService } from '../services/staff.service';
import { ProjectService } from '../services/project.service';
import { DepartmentService } from '../services/department.service';
import { TranslationService, Language } from '../services/translation.service';
import { EvaluationDistribution } from '../models/evaluation-distribution';

const SMILEYS = [
  { value: 1, icon: '😤', color: '#ef4444' },
  { value: 2, icon: '😢', color: '#f97316' },
  { value: 3, icon: '😐', color: '#3b82f6' },
  { value: 4, icon: '😊', color: '#22c55e' },
  { value: 5, icon: '😍', color: '#059669' },
];

@Component({
  selector: 'app-evaluation-form',
  templateUrl: './evaluation-form.component.html',
  styleUrls: ['./evaluation-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule],
})
export class EvaluationFormComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private cdr = inject(ChangeDetectorRef);
  private distributionService = inject(EvaluationDistributionService);
  private ratingsService = inject(EvaluationRatingsService);
  private formQuestionsService = inject(FormQuestionsService);
  private staffService = inject(StaffService);
  private projectService = inject(ProjectService);
  private departmentService = inject(DepartmentService);
  public translationService = inject(TranslationService);

  private destroy$ = new Subject<void>();

  readonly smileys = SMILEYS;

  // State signals
  loadingState = signal<'loading' | 'loaded' | 'error'>('loading');
  submitted = signal(false);
  isSubmitting = signal(false);
  errorMessage = signal('');
  currentLang = signal<Language>('en');
  showExplanation = signal(false);
  selectedQuestionIndex = signal(0);
  remarks = signal('');
  allGroupDone = signal(false);

  // Form data signals
  questions = signal<FormQuestion[]>([]);
  answers = signal<number[]>([]);
  groupEvaluations = signal<EvaluationDistribution[]>([]);

  // Locked field values (set once from distribution record)
  staffId = signal('');
  staffName = signal('');
  projectId = signal('');
  projectName = signal('');
  departmentId = signal('');
  departmentName = signal('');
  evaluatorId = signal('');
  evaluatorName = signal('');
  skillSet = signal('');
  formType = signal('');
  currentUniqId = signal<number | null>(null);
  isGroupMode = signal(false);

  // Lock flags
  isStaffLocked = signal(false);
  isEvaluatorLocked = signal(false);

  // Computed
  answeredCount = computed(() => this.answers().filter((a) => a > 0).length);
  progressPct = computed(() =>
    this.questions().length > 0 ? (this.answeredCount() / this.questions().length) * 100 : 0,
  );
  canSubmit = computed(
    () =>
      this.answeredCount() === this.questions().length &&
      this.questions().length > 0 &&
      this.staffId().trim() !== '' &&
      this.projectId().trim() !== '' &&
      this.evaluatorId().trim() !== '' &&
      this.evaluatorName().trim() !== '' &&
      this.remarks().trim() !== '',
  );

  ngOnInit(): void {
    this.translationService.currentLanguage$.pipe(takeUntil(this.destroy$)).subscribe((lang) => {
      this.currentLang.set(lang);
      this.cdr.markForCheck();
    });

    const uniqId = this.route.snapshot.queryParamMap.get('uniq_id');
    const groupId = this.route.snapshot.queryParamMap.get('group_id');

    if (uniqId) {
      this.loadFromUniqId(parseInt(uniqId, 10));
    } else if (groupId) {
      this.isGroupMode.set(true);
      this.loadFromGroupId(parseInt(groupId, 10));
    } else {
      this.loadingState.set('error');
      this.errorMessage.set(
        this.currentLang() === 'en'
          ? 'No evaluation link provided. Please use the link sent to you.'
          : '未提供评估链接。请使用发送给您的链接。',
      );
      this.cdr.markForCheck();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  t(text: { en: string; zh: string } | string): string {
    return this.translationService.translate(text);
  }

  toggleLanguage(): void {
    this.translationService.toggleLanguage();
  }

  private loadFromUniqId(uniqId: number): void {
    this.currentUniqId.set(uniqId);
    this.distributionService.getByUniqId(uniqId).subscribe({
      next: (dist) => {
        this.applyDistribution(dist);
        this.loadQuestionsForDistribution(dist);
        this.cdr.markForCheck();
      },
      error: () => {
        this.loadingState.set('error');
        this.errorMessage.set(
          this.currentLang() === 'en'
            ? 'Failed to load evaluation data. The link may be invalid or expired.'
            : '无法加载评估数据。链接可能无效或已过期。',
        );
        this.cdr.markForCheck();
      },
    });
  }

  private loadFromGroupId(groupId: number): void {
    this.distributionService.getByGroupId(groupId).subscribe({
      next: (list) => {
        if (!list || list.length === 0) {
          this.allGroupDone.set(true);
          this.loadingState.set('loaded');
          this.cdr.markForCheck();
          return;
        }
        const pending = list.filter((r) => r.status !== 'SUBMITTED' && r.status !== 'COMPLETED');
        if (pending.length === 0) {
          this.allGroupDone.set(true);
          this.loadingState.set('loaded');
          this.cdr.markForCheck();
          return;
        }
        this.groupEvaluations.set(list);
        const first = pending[0];
        this.applyDistribution(first);
        this.loadQuestionsForDistribution(first);
        this.isStaffLocked.set(false);
        this.cdr.markForCheck();
      },
      error: () => {
        this.loadingState.set('error');
        this.errorMessage.set(
          this.currentLang() === 'en'
            ? 'Failed to load group evaluation data.'
            : '无法加载组评估数据。',
        );
        this.cdr.markForCheck();
      },
    });
  }

  private applyDistribution(dist: EvaluationDistribution): void {
    this.staffId.set(dist.evaluateeId ?? '');
    this.projectId.set(dist.projectId ?? '');
    this.departmentId.set(dist.departmentId ?? '');
    this.evaluatorId.set(dist.evaluatorId ?? '');
    this.evaluatorName.set(dist.evaluatorName ?? '');
    this.skillSet.set(dist.skillSet ?? '');
    this.formType.set(dist.formType ?? '');
    this.currentUniqId.set(dist.uniqId ?? null);
    this.isStaffLocked.set(!this.isGroupMode());
    this.isEvaluatorLocked.set(true);

    // Resolve names from distribution (group endpoint has them, single doesn't)
    const distAny = dist as any;
    if (distAny.evaluateeName) this.staffName.set(distAny.evaluateeName);
    else this.fetchStaffName(dist.evaluateeId);
    if (distAny.projectName) this.projectName.set(distAny.projectName);
    else this.fetchProjectName(dist.projectId);
    if (distAny.departmentName) this.departmentName.set(distAny.departmentName);
    else this.fetchDepartmentName(dist.departmentId);
  }

  private fetchStaffName(staffId: string): void {
    if (!staffId) return;
    this.staffService.getStaffById(staffId).subscribe({
      next: (staff) => {
        if (staff?.name) {
          this.staffName.set(staff.name);
          this.cdr.markForCheck();
        }
      },
      error: () => {},
    });
  }

  private fetchProjectName(projectId: string): void {
    if (!projectId) return;
    this.projectService.getProjectById(projectId).subscribe({
      next: (project) => {
        if (project?.projectName) {
          this.projectName.set(project.projectName);
          this.cdr.markForCheck();
        }
      },
      error: () => {},
    });
  }

  private fetchDepartmentName(departmentId: string): void {
    if (!departmentId) return;
    this.departmentService.getDepartmentById(departmentId).subscribe({
      next: (dept) => {
        if (dept?.departmentName) {
          this.departmentName.set(dept.departmentName);
          this.cdr.markForCheck();
        }
      },
      error: () => {},
    });
  }

  private loadQuestionsForDistribution(dist: EvaluationDistribution): void {
    const ft = (dist.formType ?? '').toUpperCase();
    const ss = (dist.skillSet ?? '').toUpperCase();
    if (!ft || !ss) {
      this.loadingState.set('error');
      this.errorMessage.set(
        this.currentLang() === 'en'
          ? 'Evaluation form type or skill level is not set for this record.'
          : '此记录未设置评估表格类型或技能级别。',
      );
      this.cdr.markForCheck();
      return;
    }
    this.formQuestionsService.getFormQuestions(ft, ss).subscribe({
      next: (qs) => {
        if (qs.length === 0) {
          this.loadingState.set('error');
          this.errorMessage.set(
            this.currentLang() === 'en'
              ? `No questions found for form type "${ft}" / skill set "${ss}". Please contact the administrator.`
              : `未找到表格类型"${ft}"/ 技能级别"${ss}"的问题。请联系管理员。`,
          );
        } else {
          this.questions.set(qs);
          this.answers.set(new Array(qs.length).fill(0));
          this.loadingState.set('loaded');
        }
        this.cdr.markForCheck();
      },
      error: () => {
        this.loadingState.set('error');
        this.errorMessage.set(
          this.currentLang() === 'en'
            ? 'Failed to load evaluation questions. Please try again.'
            : '无法加载评估问题。请重试。',
        );
        this.cdr.markForCheck();
      },
    });
  }

  onEvaluateeChange(): void {
    const selected = this.groupEvaluations().find((r) => r.evaluateeId === this.staffId());
    if (!selected) return;
    this.answers.set([]);
    this.applyDistribution(selected);
    this.loadQuestionsForDistribution(selected);
    this.cdr.markForCheck();
  }

  selectAnswer(questionIndex: number, value: number): void {
    const updated = [...this.answers()];
    updated[questionIndex] = value;
    this.answers.set(updated);
  }

  openExplanation(index: number): void {
    this.selectedQuestionIndex.set(index);
    this.showExplanation.set(true);
  }

  closeExplanation(): void {
    this.showExplanation.set(false);
  }

  getSmileyColor(value: number): string {
    return SMILEYS.find((s) => s.value === value)?.color ?? '';
  }

  getSmileyIcon(value: number): string {
    return SMILEYS.find((s) => s.value === value)?.icon ?? '';
  }

  getRatingDescription(rating: number): string {
    const desc = this.translationService.genericRatingDescriptions[rating];
    if (!desc) return '';
    return this.currentLang() === 'zh' ? desc.zh : desc.en;
  }

  getRatingBgClass(rating: number): string {
    if (rating <= 2) return 'description-1';
    if (rating === 3) return 'description-3';
    return 'description-5';
  }

  getQuestionText(q: FormQuestion): string {
    if (this.currentLang() === 'zh' && q.questionnaireZh) return q.questionnaireZh;
    return q.questionnaire;
  }

  shouldShowCategoryHeader(index: number): boolean {
    if (index === 0) return true;
    return this.questions()[index].skillCategory !== this.questions()[index - 1].skillCategory;
  }

  getCategoryIcon(category: string): string {
    const cat = category.toLowerCase();
    if (cat.includes('technical')) return 'fa-tools';
    if (cat.includes('adaptability')) return 'fa-sync-alt';
    if (cat.includes('self-management')) return 'fa-clock';
    if (cat.includes('project standard')) return 'fa-check-circle';
    if (cat.includes('teamwork') || cat.includes('communication')) return 'fa-users';
    return 'fa-folder';
  }

  onRemarksInput(event: Event): void {
    const value = (event.target as HTMLTextAreaElement).value;
    this.remarks.set(value.substring(0, 8000));
  }

  submitEvaluation(): void {
    if (!this.canSubmit()) {
      this.errorMessage.set(this.t(this.translationService.translations.errors.allFieldsRequired));
      return;
    }

    this.isSubmitting.set(true);
    this.errorMessage.set('');

    const answersArr = this.answers();
    const payload: Record<string, unknown> = {
      staffId: this.staffId().trim(),
      projectId: this.projectId().trim(),
      departmentId: this.departmentId().trim(),
      evaluatorId: this.evaluatorId().trim(),
      evaluatorName: this.evaluatorName().trim(),
      formType: this.formType().trim(),
      carpenterLevel: this.skillSet().toUpperCase(),
      weightedScore: this.computeWeightedScore(),
      remarks: this.remarks().trim(),
      evaluationDistributionMgmtUniqId: this.currentUniqId() ?? null,
    };

    answersArr.forEach((answer, index) => {
      payload[`q${index + 1}`] = answer;
    });

    this.ratingsService.submitEvaluation(payload as any).subscribe({
      next: () => {
        if (this.currentUniqId() !== null) {
          this.distributionService
            .updateStatus(this.currentUniqId()!, 'SUBMITTED')
            .pipe(
              switchMap(() => this.distributionService.notifyEvaluator(payload)),
              catchError(() => {
                this.submitted.set(true);
                this.isSubmitting.set(false);
                this.cdr.markForCheck();
                return EMPTY;
              }),
            )
            .subscribe(() => {
              this.submitted.set(true);
              this.isSubmitting.set(false);
              this.cdr.markForCheck();
              if (this.isGroupMode()) {
                setTimeout(() => window.location.reload(), 5000);
              }
            });
        } else {
          this.submitted.set(true);
          this.isSubmitting.set(false);
          this.cdr.markForCheck();
        }
      },
      error: () => {
        this.errorMessage.set(this.t(this.translationService.translations.errors.submitFailed));
        this.isSubmitting.set(false);
        this.cdr.markForCheck();
      },
    });
  }

  computeWeightedScore(): number {
    const qs = this.questions();
    const as = this.answers();
    let rawScore = 0;
    let totalWeight = 0;
    qs.forEach((q, i) => {
      const answer = as[i] ?? 0;
      rawScore += answer * q.weightedScore;
      totalWeight += q.weightedScore;
    });
    const maxScore = 5 * totalWeight;
    return maxScore > 0 ? Math.round((rawScore / maxScore) * 100) : 0;
  }
}
