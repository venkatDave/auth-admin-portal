import { Component } from '@angular/core';

import { AccountSectionPageBase, AccountSectionPageConfig } from '../account-section/account-section-page.base';

const PAGE_CONFIG: AccountSectionPageConfig = {
  title: 'Activation Codes',
  description: 'Track issued, redeemed, and expiring activation codes by account.',
  searchPlaceholder: 'Search activation codes',
  emptyMessage: 'No activation codes are available for the selected account.',
  sectionKey: 'activationCodes',
};

@Component({
  selector: 'app-activation-codes',
  templateUrl: './activation-codes.page.html',
  styleUrls: ['./activation-codes.page.scss'],
  standalone: false,
})
export class ActivationCodesPage extends AccountSectionPageBase {
  protected readonly config = PAGE_CONFIG;
}
