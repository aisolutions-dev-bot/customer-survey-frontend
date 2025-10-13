import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EvaluationResponse } from '../models/evaluation-response';

@Injectable({ providedIn: 'root' })
export class EvaluationService {
  //private apiUrl = 'http://localhost:8080/api/evaluation';
  private apiUrl = 'https://customer-survey-backend-production.up.railway.app/api/evaluation';
  
  constructor(private http: HttpClient) {}

  submitEvaluation(evaluation: EvaluationResponse): Observable<any> {
    return this.http.post(this.apiUrl, evaluation);
  }
}
