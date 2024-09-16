import { Component } from '@angular/core';
import { HomeIconComponent } from '../icons/home-icon/home-icon.component';
import { FireIconComponent } from '../icons/fire-icon/fire-icon.component';
import { PlusIconComponent } from '../icons/plus-icon/plus-icon.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [HomeIconComponent, FireIconComponent, PlusIconComponent],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {}
