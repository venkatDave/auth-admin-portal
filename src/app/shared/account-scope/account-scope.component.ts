import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';

import { AccountContextService } from '../../users/data/account-context.service';
import { Account } from '../../users/data/user.model';

@Component({
  selector: 'app-account-scope',
  templateUrl: './account-scope.component.html',
  styleUrls: ['./account-scope.component.scss'],
  standalone: false,
})
export class AccountScopeComponent implements OnInit, OnDestroy {
  private readonly accountContext = inject(AccountContextService);
  private readonly subscription = new Subscription();

  accounts: Account[] = this.accountContext.getAccounts();
  isAccountPickerOpen = false;
  selectedAccountId = this.accountContext.getSelectedAccountId();

  ngOnInit(): void {
    this.subscription.add(
      this.accountContext.selectedAccountId$.subscribe((accountId) => {
        this.selectedAccountId = accountId;
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  get selectedAccount(): Account | undefined {
    return this.accounts.find((account) => account.id === this.selectedAccountId);
  }

  openAccountPicker(): void {
    this.isAccountPickerOpen = true;
  }

  closeAccountPicker(): void {
    this.isAccountPickerOpen = false;
  }

  selectAccount(accountId: string): void {
    this.accountContext.selectAccount(accountId);
    this.isAccountPickerOpen = false;
  }
}
