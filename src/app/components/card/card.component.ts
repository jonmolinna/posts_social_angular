import {
  Component,
  inject,
  Input,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { HeartIconComponent } from '../icons/heart-icon/heart-icon.component';
import { ChatBubbleAvalIconComponent } from '../icons/chat-bubble-aval-icon/chat-bubble-aval-icon.component';
import { PaperAirplaneComponent } from '../icons/paper-airplane/paper-airplane.component';
import { BookmarkIconComponent } from '../icons/bookmark-icon/bookmark-icon.component';
import { postInterface } from '../../interface/post.interface';
import { LetterUppercasePipe } from '../../pipe/letter.uppercase.pipe';
import { DateLocalePipe } from '../../pipe/date.locale.pipe';
import { UserService } from '../../services/users.services';
import { userInterface } from '../../interface/user.interface';
import { HeartIconSolidComponent } from '../icons/heart-icon-solid/heart-icon-solid.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../states/app.state';
import { addOrDeleteLikeLoad } from '../../states/action/like.action';

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
    HeartIconSolidComponent,
  ],
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  @Input({ required: true }) post?: postInterface;
  private userService = inject(UserService);
  constructor(private store: Store<AppState>) {}

  liked: WritableSignal<boolean> = signal(false);

  ngOnInit(): void {
    console.log('------------->', this.post);
    this.profile &&
    this.post?.likes.find((like) => like.user === this.profile?._id)
      ? this.liked.set(true)
      : this.liked.set(false);
  }

  get profile(): userInterface | null {
    return this.userService.getProfile;
  }

  handleLikeOrDelete(id: string | undefined) {
    if (id) {
      this.store.dispatch(addOrDeleteLikeLoad({ parameters: id }));
    }
  }
}
