import { Component } from '@angular/core';

import { AccountSectionPageBase, AccountSectionPageConfig } from '../account-section/account-section-page.base';

const PAGE_CONFIG: AccountSectionPageConfig = {
  title: 'Configuration',
  description: 'Review account-level settings, enabled modules, and pending operational changes.',
  searchPlaceholder: 'Search configuration records',
  emptyMessage: 'No configuration records are available for the selected account.',
  sectionKey: 'configuration',
};

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.page.html',
  styleUrls: ['./configuration.page.scss'],
  standalone: false,
})
export class ConfigurationPage extends AccountSectionPageBase {
  protected readonly config = PAGE_CONFIG;
}
