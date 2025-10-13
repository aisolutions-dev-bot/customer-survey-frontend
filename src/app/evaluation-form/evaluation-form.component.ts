import { Component, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { EvaluationService } from '../services/evaluation.service';
import { StaffService, Staff } from '../services/staff.service';
import { ProjectService, Project } from '../services/project.service';
import { EvaluationResponse } from '../models/evaluation-response';
import { DRAFTER_QUESTIONS, SMILEYS, QuestionDefinition } from '../models/evaluation-questions';
import { TranslationService, Language, Translation } from '../services/translation.service';

@Component({
  selector: 'app-evaluation-form',
  templateUrl: './evaluation-form.component.html',
  styleUrls: ['./evaluation-form.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class EvaluationFormComponent implements OnInit, OnDestroy {
  questions = DRAFTER_QUESTIONS;
  smileys = SMILEYS;
  answers = Array(6).fill(0);
  submitted = false;
  isLoading = false;
  errorMessage = '';

  showExplanation = false;
  selectedQuestion = 0;

  // Current language
  currentLang: Language = 'en';
  private destroy$ = new Subject<void>();

  // These will hold the values (from URL or user input)
  staffId: string = '';
  staffName: string = '';
  projectId: string = '';
  projectName: string = '';
  roleType: string = '';
  evaluatorId: string = '';
  evaluatorName: string = '';

  // Track if values came from URL (locked) or are user-editable
  isStaffIdLocked: boolean = false;
  isProjectIdLocked: boolean = false;
  isRoleTypeLocked: boolean = false;
  isEvaluatorIdLocked: boolean = false;

  // Staff list for dropdown (SHARED by both Staff ID and Evaluator ID)
  staffList: Staff[] = [];
  isLoadingStaff: boolean = false;

  // Project list for dropdown
  projectList: Project[] = [];
  isLoadingProjects: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private evaluationService: EvaluationService,
    private staffService: StaffService,
    private projectService: ProjectService,
    public translationService: TranslationService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Subscribe to language changes
    this.translationService.currentLanguage$.pipe(takeUntil(this.destroy$)).subscribe((lang) => {
      this.currentLang = lang;
      this.cdr.detectChanges();
    });

    // Capture route parameters
    const staffIdParam = this.route.snapshot.paramMap.get('staff_id');
    const projectIdParam = this.route.snapshot.paramMap.get('project_id');
    const roleTypeParam = this.route.snapshot.paramMap.get('role_type');
    const evaluatorParam = this.route.snapshot.paramMap.get('evaluator');

    // Load both staff list and project list in parallel
    Promise.all([this.loadStaffList(), this.loadProjectList()]).then(() => {
      // After both lists are loaded, handle URL parameters

      // Handle Staff ID parameter
      if (staffIdParam) {
        this.staffId = staffIdParam;
        this.isStaffIdLocked = true;
        this.loadStaffName(staffIdParam);
      }

      // Handle Project ID parameter
      if (projectIdParam) {
        this.projectId = projectIdParam;
        this.isProjectIdLocked = true;
        this.loadProjectName(projectIdParam);
      }

      // Handle Role Type parameter
      if (roleTypeParam) {
        this.roleType = roleTypeParam;
        this.isRoleTypeLocked = true;
      }

      // Handle Evaluator parameter
      if (evaluatorParam) {
        this.evaluatorId = evaluatorParam;
        this.isEvaluatorIdLocked = true;
        this.loadEvaluatorName(evaluatorParam);
      }
      console.log('Staff ID:', this.staffId, '(Locked:', this.isStaffIdLocked + ')');
      console.log('Project ID:', this.projectId, '(Locked:', this.isProjectIdLocked + ')');
      console.log('Role Type:', this.roleType, '(Locked:', this.isRoleTypeLocked + ')');
      console.log('Evaluator ID:', this.evaluatorId, '(Locked:', this.isEvaluatorIdLocked + ')');
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // Translation helper method
  t(text: Translation | string): string {
    return this.translationService.translate(text);
  }

  // Toggle language
  toggleLanguage(): void {
    this.translationService.toggleLanguage();
  }

  loadStaffList(): Promise<void> {
    return new Promise((resolve) => {
      this.isLoadingStaff = true;
      this.staffService.getAllStaff().subscribe({
        next: (staff) => {
          this.staffList = staff || [];
          this.isLoadingStaff = false;
          console.log('Staff list loaded:', this.staffList.length, 'records');
          this.cdr.detectChanges();
          if (this.staffList.length === 0) {
            console.warn('No staff records found in database');
          }
          resolve();
        },
        error: (error) => {
          console.error('Failed to load staff list:', error);
          this.errorMessage = this.t(this.translationService.translations.errors.loadStaffFailed);
          this.isLoadingStaff = false;
          this.cdr.detectChanges();
          this.staffList = [];
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
          console.log('Project list loaded:', this.projectList.length, 'records');
          this.cdr.detectChanges();
          if (this.projectList.length === 0) {
            console.warn('No project records found in database');
          }
          resolve();
        },
        error: (error) => {
          console.error('Failed to load project list:', error);
          this.errorMessage = this.t(this.translationService.translations.errors.loadProjectFailed);
          this.isLoadingProjects = false;
          this.cdr.detectChanges();
          this.projectList = [];
          resolve();
        },
      });
    });
  }

  loadStaffName(staffId: string): void {
    const staff = this.staffList.find((s) => s.staffId === staffId);
    if (staff) {
      this.staffName = staff.name;
      console.log('Staff name loaded from list:', this.staffName);
    } else {
      this.staffService.getStaffById(staffId).subscribe({
        next: (staff) => {
          if (staff && staff.name) {
            this.staffName = staff.name;
            console.log('Staff name loaded from API:', this.staffName);
          }
        },
        error: (error) => {
          console.error('Failed to load staff name:', error);
        },
      });
    }
  }

  loadProjectName(projectId: string): void {
    const project = this.projectList.find((p) => p.projectId === projectId);
    if (project) {
      this.projectName = project.projectName;
      console.log('Project name loaded from list:', this.projectName);
    } else {
      this.projectService.getProjectById(projectId).subscribe({
        next: (project) => {
          if (project && project.projectName) {
            this.projectName = project.projectName;
            console.log('Project name loaded from API:', this.projectName);
          }
        },
        error: (error) => {
          console.error('Failed to load project name:', error);
        },
      });
    }
  }

  loadEvaluatorName(evaluatorId: string): void {
    const staff = this.staffList.find((s) => s.staffId === evaluatorId);
    if (staff) {
      this.evaluatorName = staff.name;
      console.log('Evaluator name loaded from list:', this.evaluatorName);
    } else {
      this.staffService.getStaffById(evaluatorId).subscribe({
        next: (staff) => {
          if (staff && staff.name) {
            this.evaluatorName = staff.name;
            console.log('Evaluator name loaded from API:', this.evaluatorName);
          }
        },
        error: (error) => {
          console.error('Failed to load evaluator name:', error);
          this.errorMessage = this.t(
            this.translationService.translations.errors.loadEvaluatorFailed
          );
        },
      });
    }
  }

  onStaffChange(): void {
    console.log('Staff ID changed to:', this.staffId);
    const selectedStaff = this.staffList.find((s) => s.staffId === this.staffId);
    if (selectedStaff) {
      this.staffName = selectedStaff.name;
      console.log('Staff selected:', this.staffId, '-', this.staffName);
    } else {
      this.staffName = '';
    }
  }

  onProjectChange(): void {
    console.log('Project ID changed to:', this.projectId);
    const selectedProject = this.projectList.find((p) => p.projectId === this.projectId);
    if (selectedProject) {
      this.projectName = selectedProject.projectName;
      console.log('Project selected:', this.projectId, '-', this.projectName);
    } else {
      this.projectName = '';
    }
  }

  clearProjectSelection(): void {
    this.projectId = '';
    this.projectName = '';
    console.log('Project selection cleared');
  }

  onEvaluatorChange(): void {
    const selectedStaff = this.staffList.find((s) => s.staffId === this.evaluatorId);
    if (selectedStaff) {
      this.evaluatorName = selectedStaff.name;
      console.log('Evaluator selected:', this.evaluatorId, '-', this.evaluatorName);
    } else {
      this.evaluatorName = '';
    }
  }

  selectAnswer(questionIndex: number, value: number): void {
    this.answers[questionIndex] = value;
    this.errorMessage = '';
    console.log(`Question ${questionIndex + 1} answered with value: ${value}`);
  }

  canSubmit(): boolean {
    const allQuestionsAnswered = this.answers.every((answer) => answer > 0);
    const allFieldsFilled =
      this.staffId.trim() !== '' &&
      this.projectId.trim() !== '' &&
      this.roleType.trim() !== '' &&
      this.evaluatorId.trim() !== '' &&
      this.evaluatorName.trim() !== '';

    return allQuestionsAnswered && allFieldsFilled;
  }

  calculateWeightedScore(): number {
    let totalScore = 0;
    this.questions.forEach((question, index) => {
      totalScore += this.answers[index] * (question.weight / 5);
    });
    return totalScore;
  }

  getProgressPercentage(): number {
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
    if (!this.canSubmit()) {
      this.errorMessage = this.t(this.translationService.translations.errors.allFieldsRequired);
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    const payload: EvaluationResponse = {
      staffId: this.staffId.trim(),
      projectId: this.projectId.trim(),
      roleType: this.roleType.trim(),
      evaluatorId: this.evaluatorId.trim(),
      evaluatorName: this.evaluatorName.trim(),
      q1: this.answers[0],
      q2: this.answers[1],
      q3: this.answers[2],
      q4: this.answers[3],
      q5: this.answers[4],
      q6: this.answers[5],
    };

    console.log('Submitting evaluation:', payload);
    console.log('Weighted Score:', this.calculateWeightedScore());

    this.evaluationService.submitEvaluation(payload).subscribe({
      next: (response) => {
        this.submitted = true;
        this.isLoading = false;
        console.log('Evaluation submitted successfully', response);
      },
      error: (error) => {
        this.errorMessage = this.t(this.translationService.translations.errors.submitFailed);
        this.isLoading = false;
        console.error('Submission failed:', error);
      },
    });
  }

  getSmileyColor(value: number): string {
    const smiley = this.smileys.find((s) => s.value === value);
    return smiley ? smiley.color : '';
  }

  getSmileyIcon(value: number): string {
    const smiley = this.smileys.find((s) => s.value === value);
    return smiley ? smiley.icon : '';
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
}
