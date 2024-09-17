import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { SearchSuggestionsComponent } from '../../components/search-suggestions/search-suggestions.component';
import { CardComponent } from '../../components/card/card.component';
import { SuggestionsComponent } from '../../components/suggestions/suggestions.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SidebarComponent,
    SearchSuggestionsComponent,
    CardComponent,
    SuggestionsComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
