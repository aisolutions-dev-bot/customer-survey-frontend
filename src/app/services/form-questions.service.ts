import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface FormQuestion {
  questionNumber: number;
  questionnaire: string;
  questionnaireZh: string | null;
  weightedScore: number;
  skillCategory: string;
}

@Injectable({ providedIn: 'root' })
export class FormQuestionsService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/form-questions`;

  getFormQuestions(formType: string, skillSet: string): Observable<FormQuestion[]> {
    return this.http.get<FormQuestion[]>(`${this.apiUrl}/${formType}/${skillSet}`);
  }
}
