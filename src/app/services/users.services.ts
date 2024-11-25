import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { environment } from '../../environments/environments';
import { userInput, userInterface } from '../interface/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url: string;
  private http = inject(HttpClient);
  profile: WritableSignal<userInterface | null> = signal(null);

  constructor() {
    this.url = environment.endpoint;
  }

  addUser(user: userInput): Observable<userInterface> {
    return this.http.post<userInterface>(`${this.url}/users/register`, user);
  }

  getProfileUser() {
    return this.http.get<userInterface>(`${this.url}/users/profile`).subscribe({
      next: (data: userInterface) => {
        this.profile.set(data);
      },
      error: (error: HttpClient) => {
        console.log('Error', error);
      },
    });
  }

  get getProfile(): userInterface | null {
    return this.profile();
  }
}
