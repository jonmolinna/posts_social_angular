import { createAction, props } from '@ngrx/store';
import { postInterface } from '../../interface/post.interface';

export const postsLoad = createAction(
  '[Posts List] Load posts' // type
);

export const postsSuccess = createAction(
  '[Posts List] Posts Success',
  props<{ items: postInterface[] }>()
);
