import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  host = 'http://localhost:8095/auth/login';
  private readonly TOKEN_KEY = 'accessToken';
  isAuthenticated: boolean = false;
  roles: any;
  username: any;

  constructor(private http: HttpClient) {
    const token = localStorage.getItem(this.TOKEN_KEY);
    if (token) {
      this.accessToken = token;
      this.loadProfileFromToken(token);
    }
  }

  get accessToken(): string {
    return localStorage.getItem(this.TOKEN_KEY) || '';
  }

  set accessToken(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  public login(username: string, password: string): Observable<any> {
    const options = {
      headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded")
    };
    const params = new HttpParams()
      .set("username", username)
      .set("password", password);
    return this.http.post(this.host, params, options);
  }

  loadProfile(data: any) {
    this.isAuthenticated = true;
    this.accessToken = data["access-token"];
    this.loadProfileFromToken(this.accessToken);
  }

  private loadProfileFromToken(token: string) {
    const decodedJwt: any = jwtDecode(token);
    this.username = decodedJwt.sub;
    this.roles = decodedJwt.scope;
  }

  getProfile(): Observable<any> {
    return this.http.get<any>(this.host);
  }

  clearToken() {
    localStorage.removeItem(this.TOKEN_KEY);
    this.isAuthenticated = false;
    this.roles = null;
    this.username = null;
  }
}
