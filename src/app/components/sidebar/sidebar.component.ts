import { Component, inject } from '@angular/core';
import { HomeIconComponent } from '../icons/home-icon/home-icon.component';
import { PlusIconComponent } from '../icons/plus-icon/plus-icon.component';
import { UserCircleIconComponent } from '../icons/user-circle-icon/user-circle-icon.component';
import { ArrowRightStartOnRectangleIconComponent } from '../icons/arrow-right-start-on-rectangle-icon/arrow-right-start-on-rectangle-icon.component';
import { AuthService } from '../../services/auth.services';
import { RouterModule } from '@angular/router';
import { HomeIconSolidComponent } from '../icons/home-icon-solid/home-icon-solid.component';
import { UserCircleIconSolidComponent } from '../icons/user-circle-icon-solid/user-circle-icon-solid.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    HomeIconComponent,
    HomeIconSolidComponent,
    PlusIconComponent,
    UserCircleIconComponent,
    UserCircleIconSolidComponent,
    ArrowRightStartOnRectangleIconComponent,
    RouterModule,
  ],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  private authService = inject(AuthService);

  logout(): void {
    this.authService.logout();
  }
}
