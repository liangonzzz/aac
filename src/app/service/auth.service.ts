import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersUrl = 'assets/user.json'; // URL del archivo JSON

  constructor(private http: HttpClient) {}

  login(documentNumber: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(this.usersUrl).pipe(
      map(users => {
        const user = users.find(u =>
          u.document_number === documentNumber &&
          u.password === password
        );
        return !!user; // Devuelve true si el usuario existe, false si no
      })
    );
  }
}
