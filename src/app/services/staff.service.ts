import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Staff {
  staffId: string;
  name: string;
  formType: string;
  telMobile?: string;
  emailCompany?: string;
}

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  private apiUrl = `${environment.apiUrl}`;
  //private apiUrl = 'https://customer-survey-backend-production.up.railway.app/api';

  constructor(private http: HttpClient) {}

  getAllStaff(): Observable<Staff[]> {
    return this.http.get<Staff[]>(`${this.apiUrl}/staff`);
  }

  getStaffById(staffId: string): Observable<Staff> {
    return this.http.get<Staff>(`${this.apiUrl}/staff/${staffId}`);
  }
}
