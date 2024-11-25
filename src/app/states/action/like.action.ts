import { createAction, props } from '@ngrx/store';
import { likeInterface } from '../../interface/like.interface';

export const addOrDeleteLikeLoad = createAction(
  '[Likes Load] Likes Load',
  props<{ parameters: string }>()
);

export const addOrDeleteLikeSuccess = createAction(
  '[Likes Load] Likes Success',
  props<{ like: likeInterface }>()
);
