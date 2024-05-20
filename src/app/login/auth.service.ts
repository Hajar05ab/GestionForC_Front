import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  host= 'http://localhost:8095/auth/login'
  jwtToken = null;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.host, { username, password });
  }

  getProfile(): Observable<any> {
    return this.http.get<any>(this.host);
  }
}
