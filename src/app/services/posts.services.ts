import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { Observable } from 'rxjs';
import { postInterface } from '../interface/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private url: string;
  private http = inject(HttpClient);

  constructor() {
    this.url = environment.endpoint;
  }

  getAllPost(): Observable<postInterface[]> {
    return this.http.get<postInterface[]>(`${this.url}/posts/posts`);
  }
}
