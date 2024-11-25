import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LikeService } from '../../services/like.service';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable()
export class LikeEffects {
  constructor(private actions$: Actions, private likeService: LikeService) {}

  like$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Likes Load] Likes Load'),
      switchMap((action: any) => {
        return this.likeService.addOrDeleteLike(action.parameters).pipe(
          map((like) => ({ type: '[Likes Load] Likes Success', like })),
          catchError(() => EMPTY)
        );
      })
    )
  );
}

// https://stackoverflow.com/questions/56160313/how-to-add-an-effect-with-id-on-ngrx-store

// https://medium.com/@mughalobaid84/create-an-ngrx-effect-that-calls-an-http-services-and-handles-success-or-error-response-fcf7bcafeba1

// https://stackoverflow.com/questions/54297317/angular-ngrx-effects-how-to-pass-a-parameter
