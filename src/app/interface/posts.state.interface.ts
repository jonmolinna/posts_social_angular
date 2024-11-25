import { postInterface } from './post.interface';

export interface PostState {
  loading: boolean;
  posts: ReadonlyArray<postInterface>; // Array de solo lectura
}
