import { Component } from '@angular/core';
import { GlassIconComponent } from '../icons/glass-icon/glass-icon.component';
import { ArrowRightIconComponent } from '../icons/arrow-right-icon/arrow-right-icon.component';

@Component({
  selector: 'app-search-suggestions',
  standalone: true,
  imports: [GlassIconComponent, ArrowRightIconComponent],
  templateUrl: './search-suggestions.component.html',
})
export class SearchSuggestionsComponent {}
