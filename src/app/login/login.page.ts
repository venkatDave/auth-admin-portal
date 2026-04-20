import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AuthService } from '../auth/auth.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit, OnDestroy {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly authService = inject(AuthService);
  private readonly formBuilder = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly subscription = new Subscription();

  notice: string | null = null;

  readonly loginForm = this.formBuilder.nonNullable.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  get demoUsername(): string {
    return environment.auth.username;
  }

  get demoPassword(): string {
    return environment.auth.password;
  }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.redirectAfterLogin();
      return;
    }

    this.subscription.add(
      this.authService.notice$.subscribe((message) => {
        this.notice = message;
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  login(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { username, password } = this.loginForm.getRawValue();
    const isAuthenticated = this.authService.login(username, password);

    if (isAuthenticated) {
      this.redirectAfterLogin();
    }
  }

  hasError(controlName: 'username' | 'password'): boolean {
    const control = this.loginForm.controls[controlName];
    return control.touched && control.hasError('required');
  }

  private redirectAfterLogin(): void {
    const returnUrl = this.activatedRoute.snapshot.queryParamMap.get('returnUrl') || '/users';
    this.authService.clearNotice();
    void this.router.navigateByUrl(returnUrl);
  }
}
