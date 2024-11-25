import { ActionReducerMap } from '@ngrx/store';
import { PostState } from '../interface/posts.state.interface';
import { postsReducer } from './reducers/posts.reducers';

export interface AppState {
  posts: PostState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  posts: postsReducer,
};
