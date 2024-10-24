import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { Observable } from 'rxjs';
import { authInput, authResponse } from '../interface/auth.interface';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string;
  private http = inject(HttpClient);
  private router = inject(Router);

  constructor() {
    this.url = environment.endpoint;
  }

  authentication(input: authInput): Observable<authResponse> {
    return this.http.post<authResponse>(`${this.url}/auth/login`, input);
  }

  isAuthenticated(): boolean {
    const token = this.getAuthorizationToken();
    const helper = new JwtHelperService();
    const isExpired = helper.isTokenExpired(token);
    return !isExpired;
  }

  getAuthorizationToken(): string | null {
    const token = localStorage.getItem('ang_access_token');
    return token;
  }

  logout() {
    localStorage.removeItem('ang_access_token');
    this.router.navigate(['/login']);
  }
}
