import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Staff {
  staffId: string;
  name: string;
  telMobile?: string;
  emailCompany?: string;
}

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  //private apiUrl = 'http://localhost:8080/api'; // Update with your actual Java backend URL
  private apiUrl = 'https://customer-survey-backend-production.up.railway.app/api';

  constructor(private http: HttpClient) {}

  getAllStaff(): Observable<Staff[]> {
    return this.http.get<Staff[]>(`${this.apiUrl}/staff`);
  }

  getStaffById(staffId: string): Observable<Staff> {
    return this.http.get<Staff>(`${this.apiUrl}/staff/${staffId}`);
  }
}
