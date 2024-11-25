import { createReducer, on } from '@ngrx/store';
import { postsLoad, postsSuccess } from '../action/posts.action';
import { PostState } from '../../interface/posts.state.interface';
import { addOrDeleteLikeSuccess } from '../action/like.action';

export const initialState: PostState = {
  loading: false,
  posts: [],
};

export const postsReducer = createReducer(
  initialState,
  on(postsLoad, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(postsSuccess, (state, payload) => {
    return {
      ...state,
      loading: false,
      posts: payload.items,
    };
  }),
  on(addOrDeleteLikeSuccess, (state, payload) => {
    return {
      ...state,
      posts: state.posts.map((post) =>
        post.likes.find(
          (item) =>
            item.post === payload.like.post && item.user === payload.like.user
        )
          ? {
              ...post,
              likes: post.likes.filter(
                (like) =>
                  like.post !== payload.like.post &&
                  like.user !== payload.like.user
              ),
            }
          : { ...post, likes: [...post.likes, payload.like] }
      ),
    };
  })
);
