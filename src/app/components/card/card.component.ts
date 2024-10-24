import { Component, Input } from '@angular/core';
import { HeartIconComponent } from '../icons/heart-icon/heart-icon.component';
import { ChatBubbleAvalIconComponent } from '../icons/chat-bubble-aval-icon/chat-bubble-aval-icon.component';
import { PaperAirplaneComponent } from '../icons/paper-airplane/paper-airplane.component';
import { BookmarkIconComponent } from '../icons/bookmark-icon/bookmark-icon.component';
import { postInterface } from '../../interface/post.interface';
import { LetterUppercasePipe } from '../../pipe/letter.uppercase.pipe';
import { DateLocalePipe } from '../../pipe/date.locale.pipe';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    HeartIconComponent,
    ChatBubbleAvalIconComponent,
    PaperAirplaneComponent,
    BookmarkIconComponent,
    LetterUppercasePipe,
    DateLocalePipe,
  ],
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input({ required: true }) post: postInterface | null = null;
}
