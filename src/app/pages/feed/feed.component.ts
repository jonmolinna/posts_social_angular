import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { Store } from '@ngrx/store';
import { postsLoad } from '../../states/action/posts.action';
import { Observable } from 'rxjs';
import {
  selectListPosts,
  selectLoading,
} from '../../states/selectors/posts.selectors';
import { CommonModule } from '@angular/common';
import { AppState } from '../../states/app.state';
import { CardSkeletonComponent } from '../../components/card-skeleton/card-skeleton.component';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [CommonModule, CardComponent, CardComponent, CardSkeletonComponent],
  templateUrl: './feed.component.html',
})
export class FeedComponent implements OnInit {
  loading$: Observable<boolean> = new Observable();
  posts$: Observable<any> = new Observable();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading);
    this.store.dispatch(postsLoad());
    this.posts$ = this.store.select(selectListPosts);
  }
}
