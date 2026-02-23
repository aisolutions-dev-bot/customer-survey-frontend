import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BSProjEvaluationResponse } from '../models/bs-proj-eval-response';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class BSProjectEvaluationService {
  /* private apiUrl = `${environment.apiUrl}/bs-project-evaluation`;
  
  constructor(private http: HttpClient) {}

  submitEvaluation(evaluation: BSProjEvaluationResponse): Observable<any> {
    return this.http.post(this.apiUrl, evaluation);
  } */

  private apiUrl = `${environment.apiUrl}/evaluation-ratings`;
  
  constructor(private http: HttpClient) {}
  /**
   * Submit evaluation to m17EvaluationRatings table
   */
  submitEvaluation(evaluation: BSProjEvaluationResponse): Observable<any> {
    return this.http.post(this.apiUrl, evaluation);
  }

  /**
   * Get all evaluations
   */
  getAllEvaluations(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  /**
   * Get evaluation by ID
   */
  getEvaluationById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  /**
   * Get evaluations by evaluatee ID (staff ID)
   */
  getEvaluationsByEvaluatee(evaluateeId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/evaluatee/${evaluateeId}`);
  }

  /**
   * Get evaluations by project code
   */
  getEvaluationsByProject(projectCode: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/project/${projectCode}`);
  }

  /**
   * Get evaluations by evaluator ID
   */
  getEvaluationsByEvaluator(evaluatorId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/evaluator/${evaluatorId}`);
  }

  /**
   * Get evaluations by department ID
   */
  getEvaluationsByDepartment(departmentId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/department/${departmentId}`);
  }

  /**
   * Get evaluations by form type
   */
  getEvaluationsByFormType(formType: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/form-type`, {
      params: { formType }
    });
  }

  /**
   * Delete evaluation by ID
   */
  deleteEvaluation(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
