import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { userInput, userInterface } from '../interface/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url: string;
  private http = inject(HttpClient);

  constructor() {
    this.url = environment.endpoint;
  }

  addUser(user: userInput): Observable<userInterface> {
    return this.http.post<userInterface>(`${this.url}/users/register`, user);
  }
}
