import { Component, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, takeUntil, switchMap, catchError, EMPTY } from 'rxjs';
import { PMEvaluationService } from '../services/pm-evaluation.service';
import { StaffService, Staff } from '../services/staff.service';
import { ProjectService, Project } from '../services/project.service';
import { DepartmentService, Department } from '../services/department.service';
import { EvaluationDistributionService } from '../services/evaluation-distribution.service';
import { PMEvaluationResponse } from '../models/pm-eval-response';
import { PM_STANDARD_QUESTIONS, SMILEYS, QuestionDefinition } from '../models/pm-eval-questions';
import { TranslationService, Language, Translation } from '../services/translation.service';
import { EvaluationDistribution } from '../models/evaluation-distribution';

@Component({
  selector: 'app-pm-evaluation-form',
  templateUrl: './pm-eval-form.component.html',
  styleUrls: ['./pm-eval-form.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class PMEvaluationFormComponent implements OnInit, OnDestroy {
  static readonly FORM_TYPE = 'PM-EVALUATION';

  questions: QuestionDefinition[] = PM_STANDARD_QUESTIONS;
  smileys = SMILEYS;
  answers: number[] = Array(PM_STANDARD_QUESTIONS.length).fill(0);
  submitted = false;
  isLoading = false;
  errorMessage = '';
  remarks: string = '';

  showExplanation = false;
  selectedQuestion = 0;

  currentLang: Language = 'en';
  private destroy$ = new Subject<void>();

  currentUniqId: number | null = null;

  isGroupMode = false;
  currentGroupId: number | null = null;
  currentEvaluateeId: string = '';
  groupEvaluations: EvaluationDistribution[] = [];
  allGroupEvaluationsCompleted = false;

  staffId: string = '';
  staffName: string = '';
  projectId: string = '';
  projectName: string = '';
  roleType: string = '';
  departmentId: string = '';
  departmentName: string = '';
  evaluatorId: string = '';
  evaluatorName: string = '';
  formType = '';

  isStaffIdLocked: boolean = false;
  isProjectIdLocked: boolean = false;
  isRoleTypeLocked: boolean = false;
  isDepartmentIdLocked: boolean = false;
  isEvaluatorIdLocked: boolean = false;

  staffList: Staff[] = [];
  isLoadingStaff: boolean = false;

  projectList: Project[] = [];
  isLoadingProjects: boolean = false;

  departmentList: Department[] = [];
  isLoadingDepartments: boolean = false;

  isLoadingFromUniqId: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private pmEvaluationService: PMEvaluationService,
    private staffService: StaffService,
    private projectService: ProjectService,
    private departmentService: DepartmentService,
    private evaluationDistributionService: EvaluationDistributionService,
    public translationService: TranslationService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.translationService.currentLanguage$.pipe(takeUntil(this.destroy$)).subscribe((lang) => {
      this.currentLang = lang;
      this.cdr.detectChanges();
    });

    const uniqId = this.route.snapshot.queryParamMap.get('uniq_id');
    const groupId = this.route.snapshot.queryParamMap.get('group_id');

    if (uniqId) {
      this.currentUniqId = parseInt(uniqId, 10);
      this.loadFromUniqId(this.currentUniqId);
    } else if (groupId) {
      this.isGroupMode = true;
      this.currentGroupId = parseInt(groupId, 10);
      this.loadFromGroupId(this.currentGroupId);
    } else {
      this.initializeFromRouteParams();
    }
  }

  private loadFromUniqId(uniqId: number): void {
    this.isLoadingFromUniqId = true;

    Promise.all([this.loadStaffList(), this.loadProjectList(), this.loadDepartmentList()]).then(() => {
      this.evaluationDistributionService.getByUniqId(uniqId).subscribe({
        next: (distribution) => {
          if (distribution.evaluateeId?.trim()) {
            this.staffId = distribution.evaluateeId;
            this.isStaffIdLocked = true;
            this.loadStaffName(this.staffId);
          }
          if (distribution.projectId?.trim()) {
            this.projectId = distribution.projectId;
            this.isProjectIdLocked = true;
            this.projectName = distribution.projectName?.trim() ? distribution.projectName : '';
            if (!this.projectName) this.loadProjectName(this.projectId);
          }
          if (distribution.departmentId?.trim()) {
            this.departmentId = distribution.departmentId;
            this.isDepartmentIdLocked = true;
            this.departmentName = distribution.departmentName?.trim() ? distribution.departmentName : '';
            if (!this.departmentName) this.loadDepartmentName(this.departmentId);
          }
          if (distribution.evaluatorId?.trim()) {
            this.evaluatorId = distribution.evaluatorId;
            this.isEvaluatorIdLocked = true;
            this.evaluatorName = distribution.evaluatorName?.trim() ? distribution.evaluatorName : '';
            if (!this.evaluatorName) this.loadEvaluatorName(this.evaluatorId);
          }

          this.isLoadingFromUniqId = false;
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error('Failed to load evaluation distribution:', error);
          this.errorMessage =
            this.currentLang === 'en'
              ? 'Failed to load evaluation data. Please check the uniq_id and try again.'
              : '无法加载评估数据。请检查 uniq_id 并重试。';
          this.isLoadingFromUniqId = false;
          this.cdr.detectChanges();
        },
      });
    });
  }

  private loadFromGroupId(groupId: number): void {
    Promise.all([this.loadStaffList(), this.loadProjectList(), this.loadDepartmentList()]).then(() => {
      this.evaluationDistributionService.getByGroupId(groupId).subscribe({
        next: (list) => {
          if (!list?.length) {
            this.allGroupEvaluationsCompleted = true;
            this.isLoadingFromUniqId = false;
            this.cdr.detectChanges();
            return;
          }
          this.groupEvaluations = list;
          this.staffId = list[0].evaluateeId;
          this.patchForm(list[0]);
          this.applyDistributionForGroup(list[0]);
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error(err);
          this.errorMessage = 'Failed to load group data.';
          this.cdr.detectChanges();
        },
      });
    });
  }

  onEvaluateeChangeForGroup(): void {
    if (!this.isGroupMode) return;
    const record = this.groupEvaluations.find((r) => r.evaluateeId === this.staffId);
    if (record) this.patchForm(record);
  }

  private applyDistributionForGroup(distribution: EvaluationDistribution): void {
    this.currentEvaluateeId = distribution.evaluateeId;
    this.staffId = distribution.evaluateeId;
    this.staffName = distribution.evaluateeId;
    this.isStaffIdLocked = false;

    this.projectId = distribution.projectId;
    this.projectName = distribution.projectName;
    this.isProjectIdLocked = true;

    this.departmentId = distribution.departmentId;
    this.departmentName = distribution.departmentName;
    this.isDepartmentIdLocked = true;

    this.evaluatorId = distribution.evaluatorId;
    this.evaluatorName = distribution.evaluatorName;
    this.isEvaluatorIdLocked = true;

    this.currentUniqId = distribution.uniqId;
    if (distribution.formType && distribution.formType.trim()) {
      this.formType = distribution.formType.trim();
      console.log('Form Type from distribution:', this.formType);
    } else {
      this.fetchFormType(this.staffId);
    }
  }

  private patchForm(record: EvaluationDistribution): void {
    this.currentUniqId = record.uniqId;
    this.projectId = record.projectId;
    this.projectName = record.projectName ?? '';
    this.departmentId = record.departmentId;
    this.departmentName = record.departmentName ?? '';
    this.evaluatorId = record.evaluatorId;
    this.evaluatorName = record.evaluatorName ?? '';
    if (record.formType && record.formType.trim()) {
      this.formType = record.formType.trim();
      console.log('Form Type from distribution:', this.formType);
    } else {
      this.fetchFormType(record.evaluateeId);
    }
    this.cdr.detectChanges();
  }

  private fetchFormType(evaluateeId: string): void {
    this.staffService.getStaffById(evaluateeId).subscribe({
      next: (staff) => {
        if (staff) this.formType = staff.formType;
      },
      error: (error) => console.error('Failed to load staff name:', error),
    });
  }

  private initializeFromRouteParams(): void {
    const staffIdParam = this.route.snapshot.paramMap.get('staff_id');
    const projectIdParam = this.route.snapshot.paramMap.get('project_id');
    const roleTypeParam = this.route.snapshot.paramMap.get('role_type');
    const departmentIdParam = this.route.snapshot.paramMap.get('department_id');
    const evaluatorParam = this.route.snapshot.paramMap.get('evaluator');

    const queryStaffId = this.route.snapshot.queryParamMap.get('staff_id');
    const queryProjectId = this.route.snapshot.queryParamMap.get('project_id');
    const queryRoleType = this.route.snapshot.queryParamMap.get('role_type');
    const queryDepartmentId = this.route.snapshot.queryParamMap.get('dept_id');
    const queryEvaluator = this.route.snapshot.queryParamMap.get('evaluator');

    Promise.all([this.loadStaffList(), this.loadProjectList(), this.loadDepartmentList()]).then(() => {
      const finalStaffId = staffIdParam || queryStaffId;
      if (finalStaffId) {
        this.staffId = finalStaffId;
        this.isStaffIdLocked = true;
        this.loadStaffName(finalStaffId);
      }

      const finalProjectId = projectIdParam || queryProjectId;
      if (finalProjectId) {
        this.projectId = finalProjectId;
        this.isProjectIdLocked = true;
        this.loadProjectName(finalProjectId);
      }

      const finalRoleType = roleTypeParam || queryRoleType;
      if (finalRoleType) {
        this.roleType = finalRoleType;
        this.isRoleTypeLocked = true;
      }

      const finalDepartmentId = departmentIdParam || queryDepartmentId;
      if (finalDepartmentId) {
        this.departmentId = finalDepartmentId;
        this.isDepartmentIdLocked = true;
        this.loadDepartmentName(finalDepartmentId);
      }

      const finalEvaluator = evaluatorParam || queryEvaluator;
      if (finalEvaluator) {
        this.evaluatorId = finalEvaluator;
        this.isEvaluatorIdLocked = true;
        this.loadEvaluatorName(finalEvaluator);
      }

      this.cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  t(text: Translation | string): string {
    return this.translationService.translate(text);
  }

  toggleLanguage(): void {
    this.translationService.toggleLanguage();
  }

  shouldShowCategoryHeader(questionIndex: number): boolean {
    if (questionIndex === 0) return true;
    const current = this.questions[questionIndex];
    const previous = this.questions[questionIndex - 1];
    if (current.groupCategory && previous.groupCategory) {
      return this.t(current.groupCategory) !== this.t(previous.groupCategory);
    }
    return false;
  }

  getCategoryIcon(groupCategory: Translation | undefined): string {
    if (!groupCategory) return 'fa-folder';
    const cat = groupCategory.en.toLowerCase();
    if (cat.includes('production') || cat.includes('work progress')) return 'fa-tasks';
    if (cat.includes('quality')) return 'fa-check-circle';
    if (cat.includes('operational') || cat.includes('technical')) return 'fa-cogs';
    if (cat.includes('dependability') || cat.includes('communication')) return 'fa-comments';
    if (cat.includes('team') || cat.includes('leadership')) return 'fa-users';
    if (cat.includes('continuous') || cat.includes('improvement')) return 'fa-lightbulb';
    return 'fa-folder';
  }

  loadStaffList(): Promise<void> {
    return new Promise((resolve) => {
      this.isLoadingStaff = true;
      this.staffService.getAllStaff().subscribe({
        next: (staff) => {
          this.staffList = staff || [];
          this.isLoadingStaff = false;
          this.cdr.detectChanges();
          resolve();
        },
        error: (error) => {
          console.error('Failed to load staff list:', error);
          this.errorMessage = this.t(this.translationService.translations.errors.loadStaffFailed);
          this.isLoadingStaff = false;
          this.staffList = [];
          this.cdr.detectChanges();
          resolve();
        },
      });
    });
  }

  loadProjectList(): Promise<void> {
    return new Promise((resolve) => {
      this.isLoadingProjects = true;
      this.projectService.getAllProjects().subscribe({
        next: (projects) => {
          this.projectList = projects || [];
          this.isLoadingProjects = false;
          this.cdr.detectChanges();
          resolve();
        },
        error: (error) => {
          console.error('Failed to load project list:', error);
          this.errorMessage = this.t(this.translationService.translations.errors.loadProjectFailed);
          this.isLoadingProjects = false;
          this.projectList = [];
          this.cdr.detectChanges();
          resolve();
        },
      });
    });
  }

  loadDepartmentList(): Promise<void> {
    return new Promise((resolve) => {
      this.isLoadingDepartments = true;
      this.departmentService.getAllDepartment().subscribe({
        next: (departments) => {
          this.departmentList = departments || [];
          this.isLoadingDepartments = false;
          this.cdr.detectChanges();
          resolve();
        },
        error: (error) => {
          console.error('Failed to load department list:', error);
          this.errorMessage = this.t(this.translationService.translations.errors.loadDepartmentFailed);
          this.isLoadingDepartments = false;
          this.departmentList = [];
          this.cdr.detectChanges();
          resolve();
        },
      });
    });
  }

  loadStaffName(staffId: string): void {
    const staff = this.staffList.find((s) => s.staffId === staffId);
    if (staff) {
      this.staffName = staff.name;
      this.formType = staff.formType;
    } else {
      this.staffService.getStaffById(staffId).subscribe({
        next: (staff) => {
          if (staff?.name) {
            this.staffName = staff.name;
            this.formType = staff.formType;
          }
        },
        error: (error) => console.error('Failed to load staff name:', error),
      });
    }
  }

  loadProjectName(projectId: string): void {
    const project = this.projectList.find((p) => p.projectId === projectId);
    if (project) {
      this.projectName = project.projectName;
    } else {
      this.projectService.getProjectById(projectId).subscribe({
        next: (project) => {
          if (project?.projectName) this.projectName = project.projectName;
        },
        error: (error) => console.error('Failed to load project name:', error),
      });
    }
  }

  loadDepartmentName(departmentId: string): void {
    const department = this.departmentList.find((p) => p.departmentId === departmentId);
    if (department) {
      this.departmentName = department.departmentName;
    } else {
      this.departmentService.getDepartmentById(departmentId).subscribe({
        next: (department) => {
          if (department?.departmentName) this.departmentName = department.departmentName;
        },
        error: (error) => console.error('Failed to load department name:', error),
      });
    }
  }

  loadEvaluatorName(evaluatorId: string): void {
    const staff = this.staffList.find((s) => s.staffId === evaluatorId);
    if (staff) {
      this.evaluatorName = staff.name;
    } else {
      this.staffService.getStaffById(evaluatorId).subscribe({
        next: (staff) => {
          if (staff?.name) this.evaluatorName = staff.name;
        },
        error: (error) => {
          console.error('Failed to load evaluator name:', error);
          this.errorMessage = this.t(this.translationService.translations.errors.loadEvaluatorFailed);
        },
      });
    }
  }

  onStaffChange(): void {
    const selectedStaff = this.staffList.find((s) => s.staffId === this.staffId);
    if (selectedStaff) {
      this.staffName = selectedStaff.name;
      this.formType = selectedStaff.formType;
    } else {
      this.staffName = '';
    }
  }

  onProjectChange(): void {
    const selectedProject = this.projectList.find((p) => p.projectId === this.projectId);
    this.projectName = selectedProject ? selectedProject.projectName : '';
  }

  clearProjectSelection(): void {
    this.projectId = '';
    this.projectName = '';
  }

  onDepartmentChange(): void {
    const selectedDept = this.departmentList.find((p) => p.departmentId === this.departmentId);
    this.departmentName = selectedDept ? selectedDept.departmentName : '';
  }

  clearDepartmentSelection(): void {
    this.departmentId = '';
    this.departmentName = '';
  }

  onEvaluatorChange(): void {
    const selectedStaff = this.staffList.find((s) => s.staffId === this.evaluatorId);
    this.evaluatorName = selectedStaff ? selectedStaff.name : '';
  }

  selectAnswer(questionIndex: number, value: number): void {
    this.answers[questionIndex] = value;
    this.errorMessage = '';
  }

  canSubmit(): boolean {
    const allQuestionsAnswered = this.answers.every((answer) => answer > 0);
    const allFieldsFilled =
      this.staffId.trim() !== '' &&
      this.projectId.trim() !== '' &&
      this.departmentId.trim() !== '' &&
      this.evaluatorId.trim() !== '' &&
      this.evaluatorName.trim() !== '' &&
      this.remarks.trim() !== '';
    return allQuestionsAnswered && allFieldsFilled;
  }

  calculateWeightedScore(): number {
    if (!this.questions.length) return 0;
    let totalWeight = 0;
    this.questions.forEach((q, index) => {
      const answer = this.answers[index] ?? 0;
      totalWeight += (answer / 5) * q.weight;
    });
    return Math.round(totalWeight);
  }

  getProgressPercentage(): number {
    if (this.questions.length === 0) return 0;
    return (this.answers.filter((a) => a > 0).length / this.questions.length) * 100;
  }

  getAnsweredCount(): number {
    return this.answers.filter((a) => a > 0).length;
  }

  openExplanation(questionIndex: number): void {
    this.selectedQuestion = questionIndex;
    this.showExplanation = true;
  }

  closeExplanation(): void {
    this.showExplanation = false;
  }

  submitEvaluation(): void {
    if (this.remarks.length > 8000) {
      this.remarks = this.remarks.substring(0, 8000);
    }

    if (!this.canSubmit()) {
      this.errorMessage = this.t(this.translationService.translations.errors.allFieldsRequired);
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    const payload: any = {
      staffId: this.staffId?.trim() || '',
      projectId: this.projectId?.trim() || '',
      projectName: this.projectName?.trim() || '',
      departmentId: this.departmentId?.trim() || '',
      evaluatorId: this.evaluatorId?.trim() || '',
      evaluatorName: this.evaluatorName?.trim() || '',
      formType: this.formType?.trim() || 'PM-EVALUATION',
      carpenterLevel: 'STANDARD',
      weightedScore: this.calculateWeightedScore(),
      remarks: this.remarks.trim() || '',
      evaluationDistributionMgmtUniqId: this.currentUniqId || null,
    };

    this.answers.forEach((answer, index) => {
      payload[`q${index + 1}`] = answer;
    });

    this.pmEvaluationService.submitEvaluation(payload).subscribe({
      next: (response) => {
        if (this.currentUniqId !== null) {
          this.evaluationDistributionService
            .updateStatus(this.currentUniqId, 'SUBMITTED')
            .pipe(
              switchMap((statusResponse) => this.evaluationDistributionService.notifyEvaluator(payload)),
              catchError((err) => {
                console.error('Update or SMS failed:', err);
                this.submitted = true;
                this.isLoading = false;
                this.cdr.detectChanges();
                return EMPTY;
              }),
            )
            .subscribe((smsResponse) => {
              this.submitted = true;
              this.isLoading = false;
              this.cdr.detectChanges();
              if (this.isGroupMode) {
                setTimeout(() => window.location.reload(), 5000);
              }
            });
        } else {
          this.submitted = true;
          this.isLoading = false;
          this.cdr.detectChanges();
        }
      },
      error: (error) => {
        this.errorMessage = this.t(this.translationService.translations.errors.submitFailed);
        this.isLoading = false;
        this.cdr.detectChanges();
        console.error('Submission failed:', error);
      },
    });
  }

  getSmileyColor(value: number): string {
    return this.smileys.find((s) => s.value === value)?.color ?? '';
  }

  getSmileyIcon(value: number): string {
    return this.smileys.find((s) => s.value === value)?.icon ?? '';
  }

  getRatingDescription(questionIndex: number, rating: number): string {
    const description = this.questions[questionIndex].ratings[rating];
    return description ? this.t(description) : '';
  }

  getRatingBgClass(rating: number): string {
    if (rating <= 2) return 'description-1';
    if (rating === 3) return 'description-3';
    return 'description-5';
  }

  getSubmitHelpText(): string {
    if (this.canSubmit()) {
      return this.t(this.translationService.translations.submit.ready);
    }
    const text = this.t(this.translationService.translations.submit.pleaseAnswer);
    return text.replace('{count}', this.questions.length.toString());
  }

  reloadPage(): void {
    window.location.reload();
  }
}
