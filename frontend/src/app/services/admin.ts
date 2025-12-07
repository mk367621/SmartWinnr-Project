import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private API_URL = 'http://localhost:3000/api/admin';

  constructor(private http: HttpClient) {}

  private getAuthHeaders() {
    const token = localStorage.getItem('token');
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
  }

  getMetrics(): Observable<any> {
    return this.http.get(`${this.API_URL}/metrics`, this.getAuthHeaders());
  }
  getAllUsers() {
    return this.http.get(`${this.API_URL}/getAllUsers`, this.getAuthHeaders());
  }
  getAllOrders(): Observable<any> {
    return this.http.get(`${this.API_URL}/getAllOrders`, this.getAuthHeaders());
  }
}
