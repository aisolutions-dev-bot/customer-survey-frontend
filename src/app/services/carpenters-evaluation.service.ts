import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarpentersEvaluationResponse } from '../models/carpenters-eval-response';

@Injectable({ providedIn: 'root' })
export class CarpentersEvaluationService {
  //private apiUrl = 'http://localhost:8080/api/carpenters-evaluation';
  private apiUrl = 'https://customer-survey-backend-production.up.railway.app/api/carpenters-evaluation';
  
  constructor(private http: HttpClient) {}

  submitEvaluation(evaluation: CarpentersEvaluationResponse): Observable<any> {
    return this.http.post(this.apiUrl, evaluation);
  }
}
