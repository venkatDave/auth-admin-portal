import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { UserService } from './user.service';
import { Account } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class AccountContextService {
  private readonly userService = inject(UserService);
  private readonly selectedAccountIdSubject = new BehaviorSubject<string>(
    this.userService.getAccounts()[0]?.id ?? '',
  );

  readonly selectedAccountId$ = this.selectedAccountIdSubject.asObservable();

  getAccounts(): Account[] {
    return this.userService.getAccounts();
  }

  getSelectedAccountId(): string {
    return this.selectedAccountIdSubject.value;
  }

  getSelectedAccount(): Account | undefined {
    return this.getAccounts().find((account) => account.id === this.getSelectedAccountId());
  }

  selectAccount(accountId: string): void {
    const isKnownAccount = this.getAccounts().some((account) => account.id === accountId);

    if (!isKnownAccount) {
      throw new Error(`Unknown accountId: ${accountId}`);
    }

    this.selectedAccountIdSubject.next(accountId);
  }
}
