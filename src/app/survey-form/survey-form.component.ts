import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../services/survey.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { ActivatedRoute } from '@angular/router'; // <-- Import ActivatedRoute

const QUESTIONS = [
  'How satisfied are you with our service?',
  'How friendly was our staff?',
  'How easy was it to navigate our website?',
  'How likely are you to recommend us to others?',
  'How satisfied are you with the product quality?',
  'How was the speed of service?',
  'How well did we resolve your issue?',
  'How satisfied are you with the price/value?',
  'How likely are you to return?',
  'How clear was our communication?'
];

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.scss'],
  standalone:true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatIconModule] 
})

export class SurveyFormComponent implements OnInit {
  questions = QUESTIONS;
  answers = Array(10).fill(0); // Default 0 (not selected)
  submitted = false;

  smileys = [
    { value: 1, icon: '😡', color: 'red' },
    { value: 2, icon: '😕', color: 'orange' },
    { value: 3, icon: '😐', color: 'blue' },
    { value: 4, icon: '😊', color: 'lightgreen' },
    { value: 5, icon: '😍', color: 'green' }
  ];

  customerId: string | null = null; // <-- Store customer_id
  projectId: string | null = null; 

  constructor(
    private surveyService: SurveyService,
    private route: ActivatedRoute // <-- Inject ActivatedRoute
  ) {}

  ngOnInit() {
    console.log('ROUTE snapshot', this.route.snapshot);
    // Capture route param
    this.customerId = this.route.snapshot.paramMap.get('customer_id');
    console.log('customerId from paramMap:', this.customerId);

    this.projectId = this.route.snapshot.paramMap.get('project_id');
    console.log('projectId:', this.projectId);
    // Optionally, allow query param to override
    const queryId = this.route.snapshot.queryParamMap.get('customer_id');
    console.log('customerId from queryParamMap:', queryId);
    if (queryId) {
      this.customerId = queryId;
    }
    console.log('customerId at ngOnInit:', this.customerId);

    if (!this.customerId) {
        this.handleMissingCustomerId();
      }
      
    if (!this.projectId) {
        this.handleMissingProjectId();
      }
  }

  private handleMissingCustomerId(): void {
    // Error handling for missing customer ID
    console.error('Customer ID not found in route parameters');
    // Redirect or show error message
  }

  private handleMissingProjectId(): void {
    // Error handling for missing customer ID
    console.error('Project ID not found in route parameters');
    // Redirect or show error message
  }

  selectAnswer(qIdx: number, value: number) {
    console.log('Answer selected', qIdx, value); // Add this
    this.answers[qIdx] = value;
  }

  submitClicked() {
    console.log('Submit button clicked');
  }
  
  canSubmit() {
    return this.answers.every(a => a > 0);
  }

  submit() {
    console.log('Submit called', this.answers);
    console.log('customerId at submit:', this.customerId);
    console.log('projectId at submit:', this.projectId);
    if (!this.canSubmit()) {console.log('Cannot submit, not all answers filled'); return;};
    const [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10] = this.answers;
    const payload: any = { q1, q2, q3, q4, q5, q6, q7, q8, q9, q10 };
    if (this.customerId) {
      payload.customerId = this.customerId;
    }
    if (this.projectId) {
      payload.projectId = this.projectId; // Add projectId
    }
    console.log('Payload to send:', payload);
    this.surveyService.submitSurvey(payload).subscribe(() => {
      this.submitted = true;
      console.log('Survey submitted successfully', payload);
    }, err => {
      console.error('Survey submission failed', err);
    });
  }
}