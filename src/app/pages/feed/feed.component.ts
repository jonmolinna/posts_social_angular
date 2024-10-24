import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { PostService } from '../../services/posts.services';
import { postInterface } from '../../interface/post.interface';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [CardComponent, CardComponent],
  templateUrl: './feed.component.html',
})
export class FeedComponent implements OnInit {
  private postService = inject(PostService);
  posts: Array<postInterface> = [];

  ngOnInit(): void {
    this.postService.getAllPost().subscribe({
      next: (data: Array<postInterface>) => {
        console.log('posts', data);
        this.posts = data;
      },
      error: (error: HttpErrorResponse) => {
        console.log('Error', error);
      },
    });
  }
}
