import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { SearchSuggestionsComponent } from '../../components/search-suggestions/search-suggestions.component';
import { SuggestionsComponent } from '../../components/suggestions/suggestions.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    SidebarComponent,
    SearchSuggestionsComponent,
    SuggestionsComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
