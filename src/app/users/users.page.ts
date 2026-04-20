import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AccountContextService } from './data/account-context.service';
import { User, UserStatus } from './data/user.model';
import { UserService } from './data/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
  standalone: false,
})
export class UsersPage implements OnInit, OnDestroy {
  private readonly accountContext = inject(AccountContextService);
  private readonly userService = inject(UserService);
  private readonly router = inject(Router);

  private readonly subscription = new Subscription();
  users: User[] = [];
  filteredUsers: User[] = [];
  searchTerm = '';

  ngOnInit(): void {
    this.subscription.add(
      this.userService.users$.subscribe((users) => {
        this.users = users;
        this.applyFilter();
      }),
    );

    this.subscription.add(
      this.accountContext.selectedAccountId$.subscribe(() => {
        this.applyFilter();
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  get totalUsers(): number {
    return this.filteredByAccount.length;
  }

  get activeUsers(): number {
    return this.filteredByAccount.filter((user) => user.status === 'Active').length;
  }

  get pendingInvites(): number {
    return this.filteredByAccount.filter((user) => user.status === 'Pending').length;
  }

  get selectedAccountName(): string {
    return this.accountContext.getSelectedAccount()?.name ?? 'the selected account';
  }

  onSearchChange(event: CustomEvent<{ value?: string | null }>): void {
    const value = event.detail.value ?? '';
    this.searchTerm = value.trim().toLowerCase();
    this.applyFilter();
  }

  goToAddUser(): void {
    void this.router.navigateByUrl('/users/new');
  }

  goToEditUser(userId: string): void {
    void this.router.navigateByUrl(`/users/${userId}/edit`);
  }

  statusTone(status: UserStatus): 'success' | 'warning' | 'medium' {
    if (status === 'Active') {
      return 'success';
    }

    if (status === 'Pending') {
      return 'warning';
    }

    return 'medium';
  }

  private applyFilter(): void {
    const accountScopedUsers = this.filteredByAccount;

    if (!this.searchTerm) {
      this.filteredUsers = [...accountScopedUsers];
      return;
    }

    this.filteredUsers = accountScopedUsers.filter((user) => {
      const searchableValue = [
        user.firstName,
        user.lastName,
        user.email,
        user.accountId,
        user.accountName,
        user.role,
        user.team,
        user.status,
      ]
        .join(' ')
        .toLowerCase();

      return searchableValue.includes(this.searchTerm);
    });
  }

  private get filteredByAccount(): User[] {
    const selectedAccountId = this.accountContext.getSelectedAccountId();
    return this.users.filter((user) => user.accountId === selectedAccountId);
  }
}
