import { Component } from '@angular/core';
import { HeartIconComponent } from '../icons/heart-icon/heart-icon.component';
import { ChatBubbleAvalIconComponent } from '../icons/chat-bubble-aval-icon/chat-bubble-aval-icon.component';
import { PaperAirplaneComponent } from '../icons/paper-airplane/paper-airplane.component';
import { BookmarkIconComponent } from '../icons/bookmark-icon/bookmark-icon.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    HeartIconComponent,
    ChatBubbleAvalIconComponent,
    PaperAirplaneComponent,
    BookmarkIconComponent,
  ],
  templateUrl: './card.component.html',
})
export class CardComponent {}
