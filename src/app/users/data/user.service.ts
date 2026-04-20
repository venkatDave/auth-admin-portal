import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Account, User, UserDraft } from './user.model';

const ACCOUNTS: Account[] = [
  { id: 'ACC-1001', name: 'Northwind Health' },
  { id: 'ACC-1002', name: 'BluePeak Retail' },
  { id: 'ACC-1003', name: 'Summit Logistics' },
];

const INITIAL_USERS: User[] = [
  {
    id: 'usr-1001',
    firstName: 'Ava',
    lastName: 'Patel',
    email: 'ava.patel@adminportal.dev',
    accountId: 'ACC-1001',
    accountName: 'Northwind Health',
    role: 'Administrator',
    status: 'Active',
    team: 'Platform',
    lastActive: '2 hours ago',
  },
  {
    id: 'usr-1002',
    firstName: 'Noah',
    lastName: 'Campbell',
    email: 'noah.campbell@adminportal.dev',
    accountId: 'ACC-1002',
    accountName: 'BluePeak Retail',
    role: 'Manager',
    status: 'Active',
    team: 'Operations',
    lastActive: 'Today',
  },
  {
    id: 'usr-1003',
    firstName: 'Mia',
    lastName: 'Garcia',
    email: 'mia.garcia@adminportal.dev',
    accountId: 'ACC-1001',
    accountName: 'Northwind Health',
    role: 'Support',
    status: 'Pending',
    team: 'Customer Success',
    lastActive: 'Invited',
  },
  {
    id: 'usr-1004',
    firstName: 'Liam',
    lastName: 'Johnson',
    email: 'liam.johnson@adminportal.dev',
    accountId: 'ACC-1003',
    accountName: 'Summit Logistics',
    role: 'Manager',
    status: 'Suspended',
    team: 'Compliance',
    lastActive: '5 days ago',
  },
];

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly usersSubject = new BehaviorSubject<User[]>(INITIAL_USERS);

  readonly users$ = this.usersSubject.asObservable();

  getAccounts(): Account[] {
    return ACCOUNTS;
  }

  getAccountById(accountId: string): Account | undefined {
    return ACCOUNTS.find((account) => account.id === accountId);
  }

  getUsersSnapshot(): User[] {
    return this.usersSubject.value;
  }

  getUserById(id: string): User | undefined {
    return this.usersSubject.value.find((user) => user.id === id);
  }

  createUser(draft: UserDraft): User {
    const account = this.getRequiredAccount(draft.accountId);
    const user: User = {
      id: `usr-${Date.now()}`,
      ...draft,
      accountName: account.name,
      lastActive: 'Just now',
    };

    this.usersSubject.next([user, ...this.usersSubject.value]);

    return user;
  }

  updateUser(userId: string, draft: UserDraft): User | undefined {
    let updatedUser: User | undefined;
    const account = this.getRequiredAccount(draft.accountId);

    const nextUsers = this.usersSubject.value.map((user) => {
      if (user.id !== userId) {
        return user;
      }

      updatedUser = {
        ...user,
        ...draft,
        accountName: account.name,
        lastActive: 'Just now',
      };

      return updatedUser;
    });

    this.usersSubject.next(nextUsers);

    return updatedUser;
  }

  private getRequiredAccount(accountId: string): Account {
    const account = this.getAccountById(accountId);

    if (!account) {
      throw new Error(`Unknown accountId: ${accountId}`);
    }

    return account;
  }
}
