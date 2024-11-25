import { Component } from '@angular/core';
import { PhotoIconSolidComponent } from '../icons/photo-icon-solid/photo-icon-solid.component';
import { HeartIconSolidComponent } from '../icons/heart-icon-solid/heart-icon-solid.component';
import { ChatBubbleAvalIconSolidComponent } from '../icons/chat-bubble-aval-icon-solid/chat-bubble-aval-icon-solid.component';
import { PaperAirplaneIconSolidComponent } from '../icons/paper-airplane-icon-solid/paper-airplane-icon-solid.component';
import { BookmarkIconSolidComponent } from '../icons/bookmark-icon-solid/bookmark-icon-solid.component';

@Component({
  selector: 'app-card-skeleton',
  standalone: true,
  imports: [
    PhotoIconSolidComponent,
    HeartIconSolidComponent,
    ChatBubbleAvalIconSolidComponent,
    PaperAirplaneIconSolidComponent,
    BookmarkIconSolidComponent,
  ],
  templateUrl: './card-skeleton.component.html',
})
export class CardSkeletonComponent {}
