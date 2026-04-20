export type UserRole = 'Administrator' | 'Manager' | 'Support';

export type UserStatus = 'Active' | 'Pending' | 'Suspended';

export interface Account {
  id: string;
  name: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  accountId: string;
  accountName: string;
  role: UserRole;
  status: UserStatus;
  team: string;
  lastActive: string;
}

export interface UserDraft {
  firstName: string;
  lastName: string;
  email: string;
  accountId: string;
  role: UserRole;
  status: UserStatus;
  team: string;
}
