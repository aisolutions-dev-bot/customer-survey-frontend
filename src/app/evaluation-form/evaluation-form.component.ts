import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EvaluationService } from '../services/evaluation.service';
import { EvaluationResponse } from '../models/evaluation-response';
import { DRAFTER_QUESTIONS, SMILEYS, QuestionDefinition } from '../models/evaluation-questions';

@Component({
  selector: 'app-evaluation-form',
  templateUrl: './evaluation-form.component.html',
  styleUrls: ['./evaluation-form.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class EvaluationFormComponent implements OnInit {
  questions = DRAFTER_QUESTIONS;
  smileys = SMILEYS;
  answers = Array(6).fill(0);
  submitted = false;
  isLoading = false;
  errorMessage = '';
  
  showExplanation = false;
  selectedQuestion = 0;
  
  staffId: string | null = null;
  projectId: string | null = null;
  roleType: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private evaluationService: EvaluationService
  ) {}

  ngOnInit(): void {
    // Capture route parameters
    this.staffId = this.route.snapshot.paramMap.get('staff_id');
    this.projectId = this.route.snapshot.paramMap.get('project_id');
    this.roleType = this.route.snapshot.paramMap.get('role_type');
    
    console.log('Staff ID:', this.staffId);
    console.log('Project ID:', this.projectId);
    console.log('Role Type:', this.roleType);
    
    if (!this.staffId || !this.projectId || !this.roleType) {
      this.errorMessage = 'Missing required parameters in URL';
    }
  }

  selectAnswer(questionIndex: number, value: number): void {
    this.answers[questionIndex] = value;
    this.errorMessage = '';
    console.log(`Question ${questionIndex + 1} answered with value: ${value}`);
  }

  canSubmit(): boolean {
    return this.answers.every(answer => answer > 0);
  }

  calculateWeightedScore(): number {
    let totalScore = 0;
    this.questions.forEach((question, index) => {
      totalScore += (this.answers[index] * (question.weight/5));
    });
    return totalScore;
  }

  getProgressPercentage(): number {
    return (this.answers.filter(a => a > 0).length / this.questions.length) * 100;
  }

  getAnsweredCount(): number {
    return this.answers.filter(a => a > 0).length;
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
      this.errorMessage = 'Please answer all questions before submitting.';
      return;
    }

    if (!this.staffId || !this.projectId || !this.roleType) {
      this.errorMessage = 'Missing required parameters.';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    const payload: EvaluationResponse = {
      staffId: this.staffId,
      projectId: this.projectId,
      roleType: this.roleType,
      q1: this.answers[0],
      q2: this.answers[1],
      q3: this.answers[2],
      q4: this.answers[3],
      q5: this.answers[4],
      q6: this.answers[5]
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
        this.errorMessage = 'Failed to submit evaluation. Please try again.';
        this.isLoading = false;
        console.error('Submission failed:', error);
      }
    });
  }

  getSmileyColor(value: number): string {
    const smiley = this.smileys.find(s => s.value === value);
    return smiley ? smiley.color : '';
  }

  getSmileyIcon(value: number): string {
    const smiley = this.smileys.find(s => s.value === value);
    return smiley ? smiley.icon : '';
  }

  getRatingDescription(questionIndex: number, rating: number): string {
    return this.questions[questionIndex].ratings[rating] || '';
  }

  getRatingBgClass(rating: number): string {
    if (rating <= 2) return 'bg-red-50';
    if (rating === 3) return 'bg-blue-50';
    return 'bg-green-50';
  }
}