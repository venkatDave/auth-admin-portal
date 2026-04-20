import { Component } from '@angular/core';

import { AccountSectionPageBase, AccountSectionPageConfig } from '../account-section/account-section-page.base';

const PAGE_CONFIG: AccountSectionPageConfig = {
  title: 'Access History',
  description: 'Audit user activity, security events, and automated access changes for the account.',
  searchPlaceholder: 'Search access history',
  emptyMessage: 'No access history records are available for the selected account.',
  sectionKey: 'accessHistory',
};

@Component({
  selector: 'app-access-history',
  templateUrl: './access-history.page.html',
  styleUrls: ['./access-history.page.scss'],
  standalone: false,
})
export class AccessHistoryPage extends AccountSectionPageBase {
  protected readonly config = PAGE_CONFIG;
}
