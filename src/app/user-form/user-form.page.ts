import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Account, UserDraft, UserRole, UserStatus } from '../users/data/user.model';
import { UserService } from '../users/data/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.page.html',
  styleUrls: ['./user-form.page.scss'],
  standalone: false,
})
export class UserFormPage implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly formBuilder = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly userService = inject(UserService);

  protected readonly accounts: Account[] = this.userService.getAccounts();
  protected readonly roles: UserRole[] = ['Administrator', 'Manager', 'Support'];
  protected readonly statuses: UserStatus[] = ['Active', 'Pending', 'Suspended'];

  private userId: string | null = null;

  isEditMode = false;

  readonly userForm = this.formBuilder.nonNullable.group({
    firstName: ['', [Validators.required, Validators.maxLength(40)]],
    lastName: ['', [Validators.required, Validators.maxLength(40)]],
    email: ['', [Validators.required, Validators.email]],
    accountId: ['', Validators.required],
    role: this.formBuilder.nonNullable.control<UserRole>('Manager', Validators.required),
    status: this.formBuilder.nonNullable.control<UserStatus>('Pending', Validators.required),
    team: ['', [Validators.required, Validators.maxLength(50)]],
  });

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.paramMap.get('userId');
    this.isEditMode = !!this.userId;

    if (!this.userId) {
      return;
    }

    const user = this.userService.getUserById(this.userId);

    if (!user) {
      void this.router.navigateByUrl('/users');
      return;
    }

    this.userForm.patchValue({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      accountId: user.accountId,
      role: user.role,
      status: user.status,
      team: user.team,
    });
  }

  get pageTitle(): string {
    return this.isEditMode ? 'Edit User' : 'Add User';
  }

  get submitLabel(): string {
    return this.isEditMode ? 'Save Changes' : 'Create User';
  }

  hasError(controlName: keyof UserDraft, errorName: string): boolean {
    const control = this.userForm.controls[controlName];

    return control.touched && control.hasError(errorName);
  }

  saveUser(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    const draft = this.userForm.getRawValue();

    if (this.userId) {
      this.userService.updateUser(this.userId, draft);
    } else {
      this.userService.createUser(draft);
    }

    void this.router.navigateByUrl('/users');
  }
}
