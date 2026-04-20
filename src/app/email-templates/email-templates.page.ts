import { Component } from '@angular/core';

import { AccountSectionPageBase, AccountSectionPageConfig } from '../account-section/account-section-page.base';

const PAGE_CONFIG: AccountSectionPageConfig = {
  title: 'Email Templates',
  description: 'Browse live and draft communications used by the selected account.',
  searchPlaceholder: 'Search email templates',
  emptyMessage: 'No email templates are available for the selected account.',
  sectionKey: 'emailTemplates',
};

@Component({
  selector: 'app-email-templates',
  templateUrl: './email-templates.page.html',
  styleUrls: ['./email-templates.page.scss'],
  standalone: false,
})
export class EmailTemplatesPage extends AccountSectionPageBase {
  protected readonly config = PAGE_CONFIG;
}
