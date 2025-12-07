import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private API_URL = 'http://localhost:3000/api/orders';

  constructor(private http: HttpClient) {}

  private getAuthHeaders() {
    const token = localStorage.getItem('token');
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
  }


  getMyOrders(): Observable<any> {
    return this.http.get(`${this.API_URL}/my-orders`, this.getAuthHeaders());
  }
}
