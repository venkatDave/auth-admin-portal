export type AccountSectionKey =
  | 'configuration'
  | 'emailTemplates'
  | 'activationCodes'
  | 'licenses'
  | 'accessHistory';

export interface AccountSectionBadge {
  label: string;
  color?: 'primary' | 'success' | 'warning' | 'medium' | 'tertiary';
}

export interface AccountSectionSummary {
  label: string;
  value: string;
}

export interface AccountSectionRecord {
  id: string;
  title: string;
  subtitle: string;
  badges: AccountSectionBadge[];
  details: string[];
}

export interface AccountSectionView {
  summaries: AccountSectionSummary[];
  records: AccountSectionRecord[];
}
