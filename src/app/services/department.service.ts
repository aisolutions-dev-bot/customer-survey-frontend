import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Department {
  departmentId: string;
  departmentName: string;
}

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private apiUrl = `${environment.apiUrl}`; 
  //private apiUrl = 'https://customer-survey-backend-production.up.railway.app/api';

  constructor(private http: HttpClient) {}

  getAllDepartment(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.apiUrl}/department`);
  }

  getDepartmentById(departmentId: string): Observable<Department> {
    return this.http.get<Department>(`${this.apiUrl}/department/${departmentId}`);
  }
}