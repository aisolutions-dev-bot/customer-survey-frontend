import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EvaluationResponse } from '../legacy/models/evaluation-response';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class EvaluationService {
  private apiUrl = `${environment.apiUrl}/evaluation`;
  //private apiUrl = 'https://customer-survey-backend-production.up.railway.app/api/evaluation';
  
  constructor(private http: HttpClient) {}

  submitEvaluation(evaluation: EvaluationResponse): Observable<any> {
    return this.http.post(this.apiUrl, evaluation);
  }
}
