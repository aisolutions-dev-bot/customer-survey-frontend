import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarpentersEvaluationResponse } from '../models/carpenters-eval-response';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CarpentersEvaluationService {
  private apiUrl = `${environment.apiUrl}/api/evaluation-ratings`;
  //private apiUrl = 'https://customer-survey-backend-production.up.railway.app/api/evaluation-ratings';
  
  constructor(private http: HttpClient) {}

  submitEvaluation(evaluation: CarpentersEvaluationResponse): Observable<any> {
    return this.http.post(this.apiUrl, evaluation);
  }
}
