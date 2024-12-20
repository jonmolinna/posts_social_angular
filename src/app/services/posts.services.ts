import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { postInterface } from '../interface/post.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private http = inject(HttpClient);
  private url: string;

  constructor() {
    this.url = environment.endpoint;
  }

  getAllPosts(): Observable<postInterface[]> {
    return this.http.get<postInterface[]>(`${this.url}/posts/posts`);
  }
}
