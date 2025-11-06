import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { EvaluationDistribution } from '../models/evaluation-distribution';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EvaluationDistributionService {
  private apiUrl = `${environment.apiUrl}/evaluation-distributions`; // Adjust based on your Java API endpoint

  constructor(private http: HttpClient) {}

  /**
   * Get evaluation distribution by uniqId from m17EvaluationDistributionMgmt table
   */
  getByUniqId(uniqId: number): Observable<EvaluationDistribution> {
    return this.http.get<EvaluationDistribution>(`${this.apiUrl}/${uniqId}`).pipe(
      map(response => {
        console.log('Evaluation distribution loaded:', response);
        return response;
      }),
      catchError(this.handleError)
    );
  }

  /**
   * Update the status of an evaluation distribution
   * @param uniqId - The unique ID of the evaluation distribution
   * @param status - The new status value (e.g., 'SUBMITTED', 'PENDING', 'COMPLETED')
   */
  updateStatus(uniqId: number, status: string): Observable<EvaluationDistribution> {
    return this.http.patch<EvaluationDistribution>(
      `${this.apiUrl}/${uniqId}/status`,
      { status: status }
    ).pipe(
      map(response => {
        console.log('Evaluation distribution status updated:', response);
        return response;
      }),
      catchError(this.handleError)
    );
  }

  /**
   * Error handling
   */
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred';
    
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    
    console.error('Evaluation Distribution Service Error:', errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}