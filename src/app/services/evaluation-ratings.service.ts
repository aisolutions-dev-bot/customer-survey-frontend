import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EvaluationRatingResponse } from '../models/evaluation-rating-response';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class EvaluationRatingsService {
  private apiUrl = `${environment.apiUrl}/evaluation-ratings`;
  //private apiUrl = 'https://customer-survey-backend-production.up.railway.app/api/evaluation-ratings';

  constructor(private http: HttpClient) {}

  submitEvaluation(evaluation: EvaluationRatingResponse): Observable<any> {
    return this.http.post(this.apiUrl, evaluation);
  }
}
