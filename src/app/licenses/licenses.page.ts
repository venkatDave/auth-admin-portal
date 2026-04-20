import { Component } from '@angular/core';

import { AccountSectionPageBase, AccountSectionPageConfig } from '../account-section/account-section-page.base';

const PAGE_CONFIG: AccountSectionPageConfig = {
  title: 'Licenses',
  description: 'Review seat usage, renewal timing, and active license coverage by account.',
  searchPlaceholder: 'Search licenses',
  emptyMessage: 'No license records are available for the selected account.',
  sectionKey: 'licenses',
};

@Component({
  selector: 'app-licenses',
  templateUrl: './licenses.page.html',
  styleUrls: ['./licenses.page.scss'],
  standalone: false,
})
export class LicensesPage extends AccountSectionPageBase {
  protected readonly config = PAGE_CONFIG;
}
