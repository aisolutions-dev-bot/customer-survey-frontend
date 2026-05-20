import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PMEvaluationResponse } from '../models/pm-eval-response';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class PMEvaluationService {
  private apiUrl = `${environment.apiUrl}/evaluation-ratings`;

  constructor(private http: HttpClient) {}

  submitEvaluation(evaluation: PMEvaluationResponse): Observable<any> {
    return this.http.post(this.apiUrl, evaluation);
  }

  getAllEvaluations(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getEvaluationById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  getEvaluationsByEvaluatee(evaluateeId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/evaluatee/${evaluateeId}`);
  }

  getEvaluationsByProject(projectCode: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/project/${projectCode}`);
  }

  getEvaluationsByFormType(formType: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/form-type`, { params: { formType } });
  }

  deleteEvaluation(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
