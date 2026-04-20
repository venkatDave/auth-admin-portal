import { Directive, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';

import { AccountContextService } from '../users/data/account-context.service';
import {
  AccountSectionKey,
  AccountSectionRecord,
  AccountSectionSummary,
} from './data/account-section.model';
import { AccountSectionService } from './data/account-section.service';

export interface AccountSectionPageConfig {
  title: string;
  description: string;
  searchPlaceholder: string;
  emptyMessage: string;
  sectionKey: AccountSectionKey;
}

@Directive()
export abstract class AccountSectionPageBase implements OnInit, OnDestroy {
  private readonly accountContext = inject(AccountContextService);
  private readonly accountSectionService = inject(AccountSectionService);
  private readonly subscription = new Subscription();

  protected abstract readonly config: AccountSectionPageConfig;

  searchTerm = '';
  summaries: AccountSectionSummary[] = [];
  records: AccountSectionRecord[] = [];
  filteredRecords: AccountSectionRecord[] = [];

  get pageTitle(): string {
    return this.config.title;
  }

  get pageDescription(): string {
    return this.config.description;
  }

  get searchPlaceholder(): string {
    return this.config.searchPlaceholder;
  }

  get emptyMessage(): string {
    return this.config.emptyMessage;
  }

  get selectedAccountName(): string {
    return this.accountContext.getSelectedAccount()?.name ?? 'the selected account';
  }

  ngOnInit(): void {
    this.subscription.add(
      this.accountContext.selectedAccountId$.subscribe(() => {
        this.reloadSection();
      }),
    );

    this.reloadSection();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSearchChange(event: CustomEvent<{ value?: string | null }>): void {
    this.searchTerm = (event.detail.value ?? '').trim().toLowerCase();
    this.applyFilter();
  }

  private reloadSection(): void {
    const accountId = this.accountContext.getSelectedAccountId();
    const sectionView = this.accountSectionService.getSectionView(accountId, this.config.sectionKey);

    this.summaries = sectionView.summaries;
    this.records = sectionView.records;
    this.applyFilter();
  }

  private applyFilter(): void {
    if (!this.searchTerm) {
      this.filteredRecords = [...this.records];
      return;
    }

    this.filteredRecords = this.records.filter((record) => {
      const searchableValue = [
        record.title,
        record.subtitle,
        ...record.badges.map((badge) => badge.label),
        ...record.details,
      ]
        .join(' ')
        .toLowerCase();

      return searchableValue.includes(this.searchTerm);
    });
  }
}
