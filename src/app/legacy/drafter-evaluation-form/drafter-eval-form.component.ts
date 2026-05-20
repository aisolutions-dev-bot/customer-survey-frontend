import { Component, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { DrafterEvaluationService } from '../services/drafter-evaluation.service';
import { StaffService, Staff } from '../../services/staff.service';
import { ProjectService, Project } from '../../services/project.service';
import { DepartmentService, Department } from '../../services/department.service';
import { EvaluationDistributionService } from '../../services/evaluation-distribution.service';

import {
  DRAFTER_STANDARD_QUESTIONS,
  SMILEYS,
  QuestionDefinition,
} from '../models/drafter-eval-questions';
import { TranslationService, Language, Translation } from '../../services/translation.service';
import { switchMap, catchError, EMPTY } from 'rxjs';
import { EvaluationDistribution } from '../../models/evaluation-distribution';

@Component({
  selector: 'app-evaluation-form',
  templateUrl: './drafter-eval-form.component.html',
  styleUrls: ['./drafter-eval-form.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class DrafterEvaluationFormComponent implements OnInit, OnDestroy {
  // Constant(s)
  static readonly FORM_TYPE = 'BUSINESS SUPPORT - DRAFTER';

  questions: QuestionDefinition[] = DRAFTER_STANDARD_QUESTIONS; // Fixed: Added proper type annotation with colon
  smileys = SMILEYS;
  answers: number[] = Array(DRAFTER_STANDARD_QUESTIONS.length).fill(0);
  submitted = false;
  isLoading = false;
  errorMessage = '';
  remarks: string = '';

  showExplanation = false;
  selectedQuestion = 0;

  // Current language
  currentLang: Language = 'en';
  private destroy$ = new Subject<void>();

  // NEW: Store the uniqId for status updates
  currentUniqId: number | null = null;

  // groupId related
  isGroupMode = false;
  currentGroupId: number | null = null;
  currentEvaluateeId: string = '';
  groupEvaluations: EvaluationDistribution[] = [];
  allGroupEvaluationsCompleted = false;

  // These will hold the values (from URL or user input)
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

  // Track if values came from URL (locked) or are user-editable
  isStaffIdLocked: boolean = false;
  isProjectIdLocked: boolean = false;
  isRoleTypeLocked: boolean = false;
  isDepartmentIdLocked: boolean = false;
  isEvaluatorIdLocked: boolean = false;

  // Staff list for dropdown (SHARED by both Staff ID and Evaluator ID)
  staffList: Staff[] = [];
  isLoadingStaff: boolean = false;

  // Project list for dropdown
  projectList: Project[] = [];
  isLoadingProjects: boolean = false;

  // Department/Role list for dropdown
  departmentList: Department[] = [];
  isLoadingDepartments: boolean = false;

  // NEW: Track if data is being loaded from uniq_id
  isLoadingFromUniqId: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private drafterEvaluationService: DrafterEvaluationService,
    private staffService: StaffService,
    private projectService: ProjectService,
    private departmentService: DepartmentService,
    private evaluationDistributionService: EvaluationDistributionService,
    public translationService: TranslationService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    // Subscribe to language changes
    this.translationService.currentLanguage$.pipe(takeUntil(this.destroy$)).subscribe((lang) => {
      this.currentLang = lang;
      this.cdr.detectChanges();
    });

    // Check for uniq_id query parameter first - NEW
    const uniqId = this.route.snapshot.queryParamMap.get('uniq_id');
    const groupId = this.route.snapshot.queryParamMap.get('group_id');

    if (uniqId) {
      // Store the uniqId for later use
      this.currentUniqId = parseInt(uniqId, 10);
      // If uniq_id is provided, load data from m17EvaluationDistributionMgmt
      this.loadFromUniqId(this.currentUniqId);
    } else if (groupId) {
      this.isGroupMode = true;
      this.currentGroupId = parseInt(groupId, 10);
      this.loadFromGroupId(this.currentGroupId);
    } else {
      // Otherwise, proceed with normal parameter handling
      this.initializeFromRouteParams();
    }
  }

  // NEW: Load data from m17EvaluationDistributionMgmt table using uniq_id
  private loadFromUniqId(uniqId: number): void {
    console.log('Loading evaluation distribution from uniq_id:', uniqId);
    this.isLoadingFromUniqId = true;

    // Load all dropdown lists first
    Promise.all([this.loadStaffList(), this.loadProjectList(), this.loadDepartmentList()]).then(
      () => {
        // Then fetch the evaluation distribution data
        this.evaluationDistributionService.getByUniqId(uniqId).subscribe({
          next: (distribution) => {
            console.log('Evaluation distribution loaded:', distribution);

            // Map EvaluateeId to staffId (only if not null/empty)
            if (distribution.evaluateeId && distribution.evaluateeId.trim() !== '') {
              this.staffId = distribution.evaluateeId;
              this.isStaffIdLocked = true;
              this.loadStaffName(this.staffId);
            }

            // Map ProjectId and ProjectName (only if not null/empty)
            if (distribution.projectId && distribution.projectId.trim() !== '') {
              this.projectId = distribution.projectId;
              this.isProjectIdLocked = true;
              if (distribution.projectName && distribution.projectName.trim() !== '') {
                this.projectName = distribution.projectName;
              } else {
                this.loadProjectName(this.projectId);
              }
            }

            // Map DepartmentId and DepartmentName (only if not null/empty)
            if (distribution.departmentId && distribution.departmentId.trim() !== '') {
              this.departmentId = distribution.departmentId;
              this.isDepartmentIdLocked = true;
              if (distribution.departmentName && distribution.departmentName.trim() !== '') {
                this.departmentName = distribution.departmentName;
              } else {
                this.loadDepartmentName(this.departmentId);
              }
            }

            // Map EvaluatorId and EvaluatorName (only if not null/empty)
            if (distribution.evaluatorId && distribution.evaluatorId.trim() !== '') {
              this.evaluatorId = distribution.evaluatorId;
              this.isEvaluatorIdLocked = true;
              if (distribution.evaluatorName && distribution.evaluatorName.trim() !== '') {
                this.evaluatorName = distribution.evaluatorName;
              } else {
                this.loadEvaluatorName(this.evaluatorId);
              }
            }

            // Questions are auto-loaded, no need for skillSet handling

            this.isLoadingFromUniqId = false;

            console.log('=== Data Loaded from uniq_id ===');
            console.log('Staff ID:', this.staffId, '(Locked:', this.isStaffIdLocked + ')');
            console.log('Project ID:', this.projectId, '(Locked:', this.isProjectIdLocked + ')');
            console.log(
              'Department ID:',
              this.departmentId,
              '(Locked:',
              this.isDepartmentIdLocked + ')',
            );
            console.log(
              'Evaluator ID:',
              this.evaluatorId,
              '(Locked:',
              this.isEvaluatorIdLocked + ')',
            );
            console.log('Questions loaded:', this.questions.length);
            console.log('================================');

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
      },
    );
  }

  private loadFromGroupId(groupId: number): void {
    Promise.all([this.loadStaffList(), this.loadProjectList(), this.loadDepartmentList()]).then(
      () => {
        this.evaluationDistributionService.getByGroupId(groupId).subscribe({
          next: (list) => {
            if (!list || !list.length) {
              this.allGroupEvaluationsCompleted = true;
              this.isLoadingFromUniqId = false;
              this.cdr.detectChanges();
              return;
            }
            this.groupEvaluations = list; // keep entire server list
            const first = this.groupEvaluations[0];
            this.staffId = list[0].evaluateeId; // editable dropdown will show this
            this.patchForm(list[0]);

            this.applyDistributionForGroup(first);
            this.cdr.detectChanges();
          },
          error: (err) => {
            console.error(err);
            this.errorMessage = 'Failed to load group data.';
            this.cdr.detectChanges();
          },
        });
      },
    );
  }

  /** Called ONLY when user changes the evaluatee dropdown */
  onEvaluateeChangeForGroup(): void {
    if (!this.isGroupMode) {
      return;
    } // safety
    const record = this.groupEvaluations.find((r) => r.evaluateeId === this.staffId);
    if (record) {
      this.patchForm(record);
    }
  }

  private applyDistributionForGroup(distribution: EvaluationDistribution): void {
    this.currentEvaluateeId = distribution.evaluateeId;

    // Only evaluatee dropdown editable
    this.staffId = distribution.evaluateeId;
    this.staffName = distribution.evaluateeId;
    this.isStaffIdLocked = false;

    // Lock all other fields
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

    this.fetchFormType(this.staffId);
  }

  /** Rewrite ALL form fields from the chosen record */
  private patchForm(record: EvaluationDistribution): void {
    this.currentUniqId = record.uniqId;
    this.projectId = record.projectId;
    this.projectName = record.projectName ?? ''; // whatever fields you have
    this.departmentId = record.departmentId;
    this.departmentName = record.departmentName ?? '';
    this.evaluatorId = record.evaluatorId;
    this.evaluatorName = record.evaluatorName ?? '';
    
    this.fetchFormType(record.evaluateeId);

    this.cdr.detectChanges();
  }

  private fetchFormType(evaluateeId: string): void {
    this.staffService.getStaffById(evaluateeId).subscribe({
      next: (staff) => {
        if (staff) {
          this.formType = staff.formType;
          console.log('Form Type:', this.formType);
        }
      },
      error: (error) => {
        console.error('Failed to load staff name:', error);
      },
    });
  }

  // Initialize from route parameters (existing functionality)
  private initializeFromRouteParams(): void {
    // Capture route parameters ie. http://localhost:4200/evaluation/123/project/456/role/designer/evaluator/789
    const staffIdParam = this.route.snapshot.paramMap.get('staff_id');
    const projectIdParam = this.route.snapshot.paramMap.get('project_id');
    const roleTypeParam = this.route.snapshot.paramMap.get('role_type');
    const departmentIdParam = this.route.snapshot.paramMap.get('department_id');
    const evaluatorParam = this.route.snapshot.paramMap.get('evaluator');

    // Capture query parameters (for flexible individual parameters) ie. http://localhost:4200/carpenters-evaluation?staff_id=123&project_id=456&role_type=designer&evaluator=789
    const queryStaffId = this.route.snapshot.queryParamMap.get('staff_id');
    const queryProjectId = this.route.snapshot.queryParamMap.get('project_id');
    const queryRoleType = this.route.snapshot.queryParamMap.get('role_type');
    const queryDepartmentId = this.route.snapshot.queryParamMap.get('dept_id');
    const queryEvaluator = this.route.snapshot.queryParamMap.get('evaluator');

    // Load all staff list , project list and department list in parallel
    Promise.all([this.loadStaffList(), this.loadProjectList(), this.loadDepartmentList()]).then(
      () => {
        // After all lists are loaded, handle URL parameters

        // Handle Staff ID parameter
        const finalStaffId = staffIdParam || queryStaffId;
        if (finalStaffId) {
          this.staffId = finalStaffId;
          this.isStaffIdLocked = true;
          this.loadStaffName(finalStaffId);
        }
        // Handle Project ID parameter
        const finalProjectId = projectIdParam || queryProjectId;
        if (finalProjectId) {
          this.projectId = finalProjectId;
          this.isProjectIdLocked = true;
          this.loadProjectName(finalProjectId);
        }
        // Handle Role Type parameter
        const finalRoleType = roleTypeParam || queryRoleType;
        if (finalRoleType) {
          this.roleType = finalRoleType;
          this.isRoleTypeLocked = true;
        }
        // Handle Department ID parameter
        const finalDepartmentId = departmentIdParam || queryDepartmentId;
        if (finalDepartmentId) {
          this.departmentId = finalDepartmentId;
          this.isDepartmentIdLocked = true;
          this.loadDepartmentName(finalDepartmentId);
        }
        // Handle Evaluator parameter
        const finalEvaluator = evaluatorParam || queryEvaluator;
        if (finalEvaluator) {
          this.evaluatorId = finalEvaluator;
          this.isEvaluatorIdLocked = true;
          this.loadEvaluatorName(finalEvaluator);
        }

        console.log('=== Parameter Capture Summary ===');
        console.log('Staff ID:', this.staffId, '(Locked:', this.isStaffIdLocked + ')');
        console.log('Project ID:', this.projectId, '(Locked:', this.isProjectIdLocked + ')');
        console.log('Role Type:', this.roleType, '(Locked:', this.isRoleTypeLocked + ')');
        console.log(
          'Department ID:',
          this.departmentId,
          '(Locked:',
          this.isDepartmentIdLocked + ')',
        );
        console.log('Evaluator ID:', this.evaluatorId, '(Locked:', this.isEvaluatorIdLocked + ')');
        console.log('Questions loaded:', this.questions.length);
        console.log('================================');

        this.cdr.detectChanges();
      },
    );
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

  // Check if we should show category header for this question
  shouldShowCategoryHeader(questionIndex: number): boolean {
    if (questionIndex === 0) return true; // Always show for first question

    const currentQuestion = this.questions[questionIndex];
    const previousQuestion = this.questions[questionIndex - 1];

    // Show header if groupCategory exists and is different from previous question
    if (currentQuestion.groupCategory && previousQuestion.groupCategory) {
      const currentCategory = this.t(currentQuestion.groupCategory);
      const previousCategory = this.t(previousQuestion.groupCategory);
      return currentCategory !== previousCategory;
    }

    return false;
  }

  // Get icon for each category
  getCategoryIcon(groupCategory: Translation | undefined): string {
    if (!groupCategory) return 'fa-folder';

    const categoryEn = groupCategory.en.toLowerCase();

    if (categoryEn.includes('cost control')) return 'fa-dollar-sign';
    if (categoryEn.includes('claims')) return 'fa-file-invoice-dollar';
    if (categoryEn.includes('documental')) return 'fa-file-alt';
    if (categoryEn.includes('customer')) return 'fa-handshake';

    return 'fa-folder';
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

  loadDepartmentList(): Promise<void> {
    return new Promise((resolve) => {
      this.isLoadingDepartments = true;
      this.departmentService.getAllDepartment().subscribe({
        next: (departments) => {
          this.departmentList = departments || [];
          this.isLoadingDepartments = false;
          console.log('Department list loaded:', this.departmentList.length, 'records');
          this.cdr.detectChanges();
          if (this.departmentList.length === 0) {
            console.warn('No department records found in database');
          }
          resolve();
        },
        error: (error) => {
          console.error('Failed to load department list:', error);
          this.errorMessage = this.t(
            this.translationService.translations.errors.loadDepartmentFailed,
          );
          this.isLoadingDepartments = false;
          this.cdr.detectChanges();
          this.departmentList = [];
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
      console.log(this.formType);
      console.log('Staff name loaded from list:', this.staffName);
      console.log('Form Type:', this.formType); // Debug log
    } else {
      this.staffService.getStaffById(staffId).subscribe({
        next: (staff) => {
          if (staff && staff.name) {
            this.staffName = staff.name;
            this.formType = staff.formType;
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

  loadDepartmentName(departmentId: string): void {
    const department = this.departmentList.find((p) => p.departmentId === departmentId);
    if (department) {
      this.departmentName = department.departmentName;
      console.log('Department name loaded from list:', this.departmentName);
    } else {
      this.departmentService.getDepartmentById(departmentId).subscribe({
        next: (department) => {
          if (department && department.departmentName) {
            this.departmentName = department.departmentName;
            console.log('Department name loaded from API:', this.departmentName);
          }
        },
        error: (error) => {
          console.error('Failed to load Department name:', error);
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
            this.translationService.translations.errors.loadEvaluatorFailed,
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
      this.formType = selectedStaff.formType;
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

  onDepartmentChange(): void {
    console.log('Role/Dept changed to:', this.departmentId);
    const selectedDept = this.departmentList.find((p) => p.departmentId === this.departmentId);
    if (selectedDept) {
      this.departmentName = selectedDept.departmentName;
      console.log('Department selected:', this.departmentId, '-', this.departmentName);
    } else {
      this.departmentName = '';
    }
  }
  clearDepartmentSelection(): void {
    this.departmentId = '';
    console.log('Role/Department selection cleared');
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
      totalWeight += answer / 5 * q.weight;
    });

    if (totalWeight === 0) return 0;
    return Math.round(( totalWeight) );
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

    console.log(this.formType);
    const payload: any = {
      staffId: this.staffId?.trim() || '',
      projectId: this.projectId?.trim() || '',
      projectName: this.projectName?.trim() || '',
      departmentId: this.departmentId?.trim() || '',
      evaluatorId: this.evaluatorId?.trim() || '',
      evaluatorName: this.evaluatorName?.trim() || '',
      formType: this.formType?.trim() || 'DRAFTER', // Default to 'DRAFTER' if undefined,
      carpenterLevel: 'STANDARD', // Always use 'STANDARD' for the single form
      weightedScore: this.calculateWeightedScore(),
      remarks: this.remarks.trim() || '',
      evaluationDistributionMgmtUniqId: this.currentUniqId || null,
    };

    // Add all question answers dynamically
    this.answers.forEach((answer, index) => {
      payload[`q${index + 1}`] = answer;
    });

    console.log('Submitting evaluation:', payload);
    console.log('Weighted Score:', this.calculateWeightedScore());

    this.drafterEvaluationService.submitEvaluation(payload).subscribe({
      next: (response) => {
        console.log('Evaluation submitted successfully', response);

        // Update status to "SUBMITTED" if we have a uniqId
        if (this.currentUniqId !== null) {
          console.log('Updating status to SUBMITTED for uniqId:', this.currentUniqId);
          this.evaluationDistributionService
            .updateStatus(this.currentUniqId, 'SUBMITTED')
            .pipe(
              switchMap((statusResponse) => {
                console.log('Status updated:', statusResponse);
                return this.evaluationDistributionService.notifyEvaluator(payload);
              }),
              catchError((err) => {
                console.error('Update or SMS failed:', err);
                this.submitted = true;
                this.isLoading = false;
                this.cdr.detectChanges();
                return EMPTY;
              }),
            )
            .subscribe((smsResponse) => {
              console.log('SMS sent:', smsResponse);
              this.submitted = true;
              this.isLoading = false;
              this.cdr.detectChanges();
              if (this.isGroupMode) {
                setTimeout(() => {
                  window.location.reload();
                }, 5000);
              }
            });
        } else {
          // If no uniqId, just mark as submitted
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

  reloadPage(): void {
    window.location.reload();
  }
}
