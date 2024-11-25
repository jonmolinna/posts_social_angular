import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PostService } from '../../services/posts.services';
import { catchError, EMPTY, map, mergeMap } from 'rxjs';

@Injectable()
export class PostEffects {
  constructor(private actions$: Actions, private postService: PostService) {}

  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Posts List] Load posts'), // escucha la accion
      mergeMap(() =>
        this.postService.getAllPosts().pipe(
          map((posts) => ({
            type: '[Posts List] Posts Success',
            items: posts,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
