import { Injectable } from '@angular/core';

import { AccountSectionKey, AccountSectionView } from './account-section.model';

const SECTION_DATA: Record<string, Record<AccountSectionKey, AccountSectionView>> = {
  'ACC-1001': {
    configuration: {
      summaries: [
        { label: 'Active Modules', value: '8' },
        { label: 'Pending Changes', value: '2' },
        { label: 'Last Publish', value: 'Today' },
      ],
      records: [
        {
          id: 'cfg-1001',
          title: 'Identity Provider',
          subtitle: 'SAML authentication for care teams',
          badges: [{ label: 'Enabled', color: 'success' }, { label: 'Security', color: 'primary' }],
          details: ['Updated by Ava Patel', 'Version 4.2', 'Published 2 hours ago'],
        },
        {
          id: 'cfg-1002',
          title: 'Notification Routing',
          subtitle: 'Critical alerts forwarded to on-call managers',
          badges: [{ label: 'Review', color: 'warning' }, { label: 'Messaging', color: 'tertiary' }],
          details: ['Updated by Noah Campbell', 'Draft revision open', 'Changed yesterday'],
        },
      ],
    },
    emailTemplates: {
      summaries: [
        { label: 'Live Templates', value: '14' },
        { label: 'Drafts', value: '3' },
        { label: 'Locales', value: '2' },
      ],
      records: [
        {
          id: 'tpl-1001',
          title: 'Welcome Invitation',
          subtitle: 'Sent when a clinical user is added',
          badges: [{ label: 'Live', color: 'success' }, { label: 'English', color: 'primary' }],
          details: ['Trigger: User onboarding', 'Owner: Platform Team', 'Edited today'],
        },
        {
          id: 'tpl-1002',
          title: 'Password Reset',
          subtitle: 'Recovery instructions for portal users',
          badges: [{ label: 'Live', color: 'success' }, { label: 'Compliance', color: 'tertiary' }],
          details: ['Trigger: Self-service reset', 'Owner: Security Ops', 'Edited 4 days ago'],
        },
      ],
    },
    activationCodes: {
      summaries: [
        { label: 'Issued This Week', value: '26' },
        { label: 'Unused', value: '5' },
        { label: 'Expiring Soon', value: '1' },
      ],
      records: [
        {
          id: 'act-1001',
          title: 'NW-HLTH-4437',
          subtitle: 'Administrator activation code',
          badges: [{ label: 'Unused', color: 'warning' }, { label: '30 Days', color: 'primary' }],
          details: ['Issued to: Clinical Admin', 'Created by Ava Patel', 'Expires 2026-05-07'],
        },
        {
          id: 'act-1002',
          title: 'NW-HLTH-4420',
          subtitle: 'Support onboarding code',
          badges: [{ label: 'Redeemed', color: 'success' }, { label: 'Support', color: 'tertiary' }],
          details: ['Issued to: Success Team', 'Redeemed yesterday', 'Expires 2026-06-01'],
        },
      ],
    },
    licenses: {
      summaries: [
        { label: 'Total Seats', value: '180' },
        { label: 'Seats Used', value: '146' },
        { label: 'Renewal Date', value: '2026-09-30' },
      ],
      records: [
        {
          id: 'lic-1001',
          title: 'Enterprise Care Suite',
          subtitle: 'Primary user management entitlement',
          badges: [{ label: 'Active', color: 'success' }, { label: 'Annual', color: 'primary' }],
          details: ['Contract owner: Procurement', 'Used 146 of 180 seats', 'Renews in 165 days'],
        },
        {
          id: 'lic-1002',
          title: 'Secure Messaging Add-on',
          subtitle: 'Protected notifications and reminders',
          badges: [{ label: 'Active', color: 'success' }, { label: 'Addon', color: 'tertiary' }],
          details: ['Used 78 of 100 seats', 'Compliance checked', 'Renews in 165 days'],
        },
      ],
    },
    accessHistory: {
      summaries: [
        { label: 'Events Today', value: '128' },
        { label: 'Failed Attempts', value: '4' },
        { label: 'Unique IPs', value: '19' },
      ],
      records: [
        {
          id: 'hist-1001',
          title: 'Ava Patel',
          subtitle: 'Updated role permissions for Support group',
          badges: [{ label: 'Success', color: 'success' }, { label: 'Admin Action', color: 'primary' }],
          details: ['IP: 10.18.4.29', 'Time: 09:42 AM', 'Device: Chrome on macOS'],
        },
        {
          id: 'hist-1002',
          title: 'Unknown User',
          subtitle: 'Failed sign-in attempt blocked by MFA policy',
          badges: [{ label: 'Blocked', color: 'warning' }, { label: 'Security', color: 'tertiary' }],
          details: ['IP: 203.14.61.2', 'Time: 08:17 AM', 'Reason: Invalid OTP'],
        },
      ],
    },
  },
  'ACC-1002': {
    configuration: {
      summaries: [
        { label: 'Active Modules', value: '6' },
        { label: 'Pending Changes', value: '1' },
        { label: 'Last Publish', value: 'Yesterday' },
      ],
      records: [
        {
          id: 'cfg-2001',
          title: 'Store Hierarchy Sync',
          subtitle: 'Daily sync with regional retail structure',
          badges: [{ label: 'Enabled', color: 'success' }, { label: 'Operations', color: 'primary' }],
          details: ['Updated by Noah Campbell', 'Version 3.8', 'Published yesterday'],
        },
        {
          id: 'cfg-2002',
          title: 'Regional Access Rules',
          subtitle: 'Country-specific permission templates',
          badges: [{ label: 'Enabled', color: 'success' }, { label: 'Access', color: 'tertiary' }],
          details: ['Updated by Liam Johnson', 'Version 2.1', 'Published 3 days ago'],
        },
      ],
    },
    emailTemplates: {
      summaries: [
        { label: 'Live Templates', value: '9' },
        { label: 'Drafts', value: '1' },
        { label: 'Locales', value: '4' },
      ],
      records: [
        {
          id: 'tpl-2001',
          title: 'Store Manager Invite',
          subtitle: 'Initial invite for regional managers',
          badges: [{ label: 'Live', color: 'success' }, { label: 'Multilingual', color: 'primary' }],
          details: ['Trigger: Manager onboarding', 'Owner: Operations', 'Edited today'],
        },
        {
          id: 'tpl-2002',
          title: 'Quarterly Access Review',
          subtitle: 'Reminder to review assigned permissions',
          badges: [{ label: 'Draft', color: 'warning' }, { label: 'Governance', color: 'tertiary' }],
          details: ['Trigger: Quarterly review', 'Owner: Compliance', 'Edited 2 days ago'],
        },
      ],
    },
    activationCodes: {
      summaries: [
        { label: 'Issued This Week', value: '11' },
        { label: 'Unused', value: '2' },
        { label: 'Expiring Soon', value: '0' },
      ],
      records: [
        {
          id: 'act-2001',
          title: 'BLPK-2281',
          subtitle: 'Manager access activation code',
          badges: [{ label: 'Redeemed', color: 'success' }, { label: 'Manager', color: 'primary' }],
          details: ['Issued to: APAC Retail', 'Redeemed today', 'Expires 2026-05-22'],
        },
        {
          id: 'act-2002',
          title: 'BLPK-2270',
          subtitle: 'Temporary support activation code',
          badges: [{ label: 'Unused', color: 'warning' }, { label: 'Support', color: 'tertiary' }],
          details: ['Issued to: Store Ops', 'Created 2 days ago', 'Expires 2026-04-30'],
        },
      ],
    },
    licenses: {
      summaries: [
        { label: 'Total Seats', value: '95' },
        { label: 'Seats Used', value: '67' },
        { label: 'Renewal Date', value: '2026-11-14' },
      ],
      records: [
        {
          id: 'lic-2001',
          title: 'Retail Workforce Cloud',
          subtitle: 'Core staff administration license',
          badges: [{ label: 'Active', color: 'success' }, { label: 'Monthly Audit', color: 'primary' }],
          details: ['Used 67 of 95 seats', 'Owner: Retail IT', 'Renews in 210 days'],
        },
      ],
    },
    accessHistory: {
      summaries: [
        { label: 'Events Today', value: '72' },
        { label: 'Failed Attempts', value: '1' },
        { label: 'Unique IPs', value: '11' },
      ],
      records: [
        {
          id: 'hist-2001',
          title: 'Noah Campbell',
          subtitle: 'Invited two new managers for Melbourne stores',
          badges: [{ label: 'Success', color: 'success' }, { label: 'Admin Action', color: 'primary' }],
          details: ['IP: 10.45.7.18', 'Time: 11:20 AM', 'Device: Edge on Windows'],
        },
        {
          id: 'hist-2002',
          title: 'Store Ops API',
          subtitle: 'Automated nightly sync completed',
          badges: [{ label: 'Success', color: 'success' }, { label: 'Automation', color: 'tertiary' }],
          details: ['IP: 172.16.9.40', 'Time: 01:08 AM', 'Duration: 4m 18s'],
        },
      ],
    },
  },
  'ACC-1003': {
    configuration: {
      summaries: [
        { label: 'Active Modules', value: '7' },
        { label: 'Pending Changes', value: '3' },
        { label: 'Last Publish', value: '2 days ago' },
      ],
      records: [
        {
          id: 'cfg-3001',
          title: 'Driver Access Matrix',
          subtitle: 'Role groups for dispatch and yard teams',
          badges: [{ label: 'Enabled', color: 'success' }, { label: 'Access', color: 'primary' }],
          details: ['Updated by Liam Johnson', 'Version 5.0', 'Published 2 days ago'],
        },
        {
          id: 'cfg-3002',
          title: 'Warehouse Notifications',
          subtitle: 'Escalations for missed delivery milestones',
          badges: [{ label: 'Review', color: 'warning' }, { label: 'Messaging', color: 'tertiary' }],
          details: ['Updated by Compliance Team', 'Change window open', 'Edited today'],
        },
      ],
    },
    emailTemplates: {
      summaries: [
        { label: 'Live Templates', value: '12' },
        { label: 'Drafts', value: '2' },
        { label: 'Locales', value: '3' },
      ],
      records: [
        {
          id: 'tpl-3001',
          title: 'Dispatcher Invite',
          subtitle: 'Welcome flow for central operations',
          badges: [{ label: 'Live', color: 'success' }, { label: 'Operations', color: 'primary' }],
          details: ['Trigger: Dispatcher onboarding', 'Owner: Logistics IT', 'Edited yesterday'],
        },
        {
          id: 'tpl-3002',
          title: 'License Renewal Reminder',
          subtitle: 'Notifies admins before seat renewals',
          badges: [{ label: 'Live', color: 'success' }, { label: 'Finance', color: 'tertiary' }],
          details: ['Trigger: 30-day reminder', 'Owner: Procurement', 'Edited 5 days ago'],
        },
      ],
    },
    activationCodes: {
      summaries: [
        { label: 'Issued This Week', value: '18' },
        { label: 'Unused', value: '6' },
        { label: 'Expiring Soon', value: '2' },
      ],
      records: [
        {
          id: 'act-3001',
          title: 'SLOG-9012',
          subtitle: 'Dispatcher onboarding code',
          badges: [{ label: 'Unused', color: 'warning' }, { label: 'Dispatcher', color: 'primary' }],
          details: ['Issued to: Sydney Hub', 'Created today', 'Expires 2026-04-29'],
        },
        {
          id: 'act-3002',
          title: 'SLOG-8998',
          subtitle: 'Warehouse supervisor access code',
          badges: [{ label: 'Redeemed', color: 'success' }, { label: 'Supervisor', color: 'tertiary' }],
          details: ['Issued to: Brisbane Hub', 'Redeemed yesterday', 'Expires 2026-05-15'],
        },
      ],
    },
    licenses: {
      summaries: [
        { label: 'Total Seats', value: '132' },
        { label: 'Seats Used', value: '118' },
        { label: 'Renewal Date', value: '2026-08-10' },
      ],
      records: [
        {
          id: 'lic-3001',
          title: 'Logistics Command Center',
          subtitle: 'Primary dispatch and warehouse entitlement',
          badges: [{ label: 'Active', color: 'success' }, { label: 'Enterprise', color: 'primary' }],
          details: ['Used 118 of 132 seats', 'Owner: Central IT', 'Renews in 114 days'],
        },
      ],
    },
    accessHistory: {
      summaries: [
        { label: 'Events Today', value: '91' },
        { label: 'Failed Attempts', value: '3' },
        { label: 'Unique IPs', value: '14' },
      ],
      records: [
        {
          id: 'hist-3001',
          title: 'Liam Johnson',
          subtitle: 'Suspended a lapsed contractor account',
          badges: [{ label: 'Success', color: 'success' }, { label: 'Compliance', color: 'primary' }],
          details: ['IP: 10.88.3.14', 'Time: 02:41 PM', 'Device: Safari on macOS'],
        },
        {
          id: 'hist-3002',
          title: 'Unknown User',
          subtitle: 'Rate-limited login attempts from untrusted network',
          badges: [{ label: 'Blocked', color: 'warning' }, { label: 'Security', color: 'tertiary' }],
          details: ['IP: 85.22.17.91', 'Time: 06:54 AM', 'Reason: Password spray detection'],
        },
      ],
    },
  },
};

@Injectable({
  providedIn: 'root',
})
export class AccountSectionService {
  getSectionView(accountId: string, sectionKey: AccountSectionKey): AccountSectionView {
    return SECTION_DATA[accountId]?.[sectionKey] ?? { summaries: [], records: [] };
  }
}
