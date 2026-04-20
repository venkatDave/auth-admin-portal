import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';

import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit, OnDestroy {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly subscription = new Subscription();

  public appPages = [
    { title: 'Users', url: '/users', icon: 'people' },
    { title: 'Configuration', url: '/configuration', icon: 'settings' },
    { title: 'Email Templates', url: '/email-templates', icon: 'mail-open' },
    { title: 'Activation Codes', url: '/activation-codes', icon: 'key' },
    { title: 'Licenses', url: '/licenses', icon: 'document-text' },
    { title: 'Access History', url: '/access-history', icon: 'time' },
  ];

  isAuthenticated = this.authService.isAuthenticated();
  currentRouteUrl = this.router.url;

  ngOnInit(): void {
    this.subscription.add(
      this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
        this.isAuthenticated = isAuthenticated;
      }),
    );

    this.subscription.add(
      this.router.events
        .pipe(filter((event) => event instanceof NavigationEnd))
        .subscribe((event) => {
          this.currentRouteUrl = (event as NavigationEnd).urlAfterRedirects;
        }),
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  get showShell(): boolean {
    return this.isAuthenticated && this.currentRouteUrl !== '/login';
  }
}
