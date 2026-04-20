import { Component, inject } from '@angular/core';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  standalone: false,
})
export class UserInfoComponent {
  private readonly authService = inject(AuthService);

  isPopoverOpen = false;
  popoverEvent?: Event;

  get isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  get username(): string {
    return this.authService.currentUsername;
  }

  get sessionTimeoutMinutes(): number {
    return this.authService.sessionTimeoutMinutes;
  }

  openPopover(event: Event): void {
    this.popoverEvent = event;
    this.isPopoverOpen = true;
  }

  closePopover(): void {
    this.isPopoverOpen = false;
    this.popoverEvent = undefined;
  }

  viewProfile(): void {
    this.closePopover();
  }

  logout(): void {
    this.closePopover();
    this.authService.logout('Signed out successfully.');
  }
}
