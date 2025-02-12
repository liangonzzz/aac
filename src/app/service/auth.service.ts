import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://tu-backend.com/api/auth'; // 🔴 Cambia esto por la URL real de tu backend

  constructor(private http: HttpClient) {}

  login(credentials: { documentNumber: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }
}
