import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Project {
  projectId: string;
  projectName: string;
  clientName?: string;
  status?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = `${environment.apiUrl}`;
  //private apiUrl = 'https://customer-survey-backend-production.up.railway.app/api';

  constructor(private http: HttpClient) {}

  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiUrl}/projects`);
  }

  getActiveProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiUrl}/projects/active`);
  }

  getProjectById(projectId: string): Observable<Project> {
    return this.http.get<Project>(`${this.apiUrl}/projects/${projectId}`);
  }
}
