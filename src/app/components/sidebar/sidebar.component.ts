import { Component } from '@angular/core';
import { HomeIconComponent } from '../icons/home-icon/home-icon.component';
import { FireIconComponent } from '../icons/fire-icon/fire-icon.component';
import { PlusIconComponent } from '../icons/plus-icon/plus-icon.component';
import { UserCircleIconComponent } from '../icons/user-circle-icon/user-circle-icon.component';
import { ArrowRightStartOnRectangleIconComponent } from '../icons/arrow-right-start-on-rectangle-icon/arrow-right-start-on-rectangle-icon.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    HomeIconComponent,
    FireIconComponent,
    PlusIconComponent,
    UserCircleIconComponent,
    ArrowRightStartOnRectangleIconComponent,
  ],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {}
