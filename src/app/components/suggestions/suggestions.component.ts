import { Component } from '@angular/core';
import { UserCircleIconComponent } from '../icons/user-circle-icon/user-circle-icon.component';

@Component({
  selector: 'app-suggestions',
  standalone: true,
  imports: [UserCircleIconComponent],
  templateUrl: './suggestions.component.html',
})
export class SuggestionsComponent {}
