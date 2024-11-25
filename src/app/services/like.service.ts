import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { likeInterface } from '../interface/like.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LikeService {
  private http = inject(HttpClient);
  private url: string;

  constructor() {
    this.url = environment.endpoint;
  }

  addOrDeleteLike(id: string): Observable<likeInterface> {
    return this.http.post<likeInterface>(
      `${this.url}/likes/addOrDelete/${id}`,
      {}
    );
  }
}
