import { createSelector } from '@ngrx/store';
import { PostState } from '../../interface/posts.state.interface';
import { AppState } from '../app.state';

export const selectPosts = (state: AppState) => state.posts;

export const selectListPosts = createSelector(
  selectPosts,
  (state: PostState) => state.posts
);

export const selectLoading = createSelector(
  selectPosts,
  (state: PostState) => state.loading
);
