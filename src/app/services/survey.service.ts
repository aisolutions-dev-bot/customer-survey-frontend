import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SurveyResponse } from '../models/survey-response';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SurveyService {
  private apiUrl = 'http://customer-survey-backend-production.up.railway.app/api/survey';

  constructor(private http: HttpClient) {}

  submitSurvey(response: SurveyResponse): Observable<any> {
    console.log('Submitting survey response:', response);
    return this.http.post(this.apiUrl, response);
  }
}