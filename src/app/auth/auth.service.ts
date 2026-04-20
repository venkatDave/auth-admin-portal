import { DOCUMENT } from '@angular/common';
import { Injectable, NgZone, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription, fromEvent, merge } from 'rxjs';

import { environment } from '../../environments/environment';

interface SessionState {
  authenticated: true;
  lastActive: number;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly document = inject(DOCUMENT);
  private readonly ngZone = inject(NgZone);
  private readonly router = inject(Router);

  private readonly authenticatedSubject = new BehaviorSubject<boolean>(false);
  private readonly noticeSubject = new BehaviorSubject<string | null>(null);

  private activitySubscription?: Subscription;
  private inactivityTimer?: ReturnType<typeof setTimeout>;

  readonly isAuthenticated$ = this.authenticatedSubject.asObservable();
  readonly notice$ = this.noticeSubject.asObservable();

  get currentUsername(): string {
    return environment.auth.username;
  }

  get sessionTimeoutMinutes(): number {
    return Math.round(environment.auth.inactivityTimeoutMs / 60000);
  }

  constructor() {
    this.restoreSession();
  }

  isAuthenticated(): boolean {
    return this.authenticatedSubject.value;
  }

  login(username: string, password: string): boolean {
    const { auth } = environment;
    const isValidUser = username === auth.username && password === auth.password;

    if (!isValidUser) {
      this.noticeSubject.next('Invalid username or password.');
      return false;
    }

    this.persistSession(Date.now());
    this.authenticatedSubject.next(true);
    this.noticeSubject.next(null);
    this.startInactivityWatcher();

    return true;
  }

  logout(message?: string): void {
    this.stopInactivityWatcher();
    sessionStorage.removeItem(environment.auth.sessionStorageKey);
    this.authenticatedSubject.next(false);
    this.noticeSubject.next(message ?? null);
    void this.router.navigateByUrl('/login');
  }

  clearNotice(): void {
    this.noticeSubject.next(null);
  }

  private restoreSession(): void {
    const rawSession = sessionStorage.getItem(environment.auth.sessionStorageKey);

    if (!rawSession) {
      return;
    }

    try {
      const session = JSON.parse(rawSession) as SessionState;
      const isExpired = Date.now() - session.lastActive >= environment.auth.inactivityTimeoutMs;

      if (!session.authenticated || isExpired) {
        sessionStorage.removeItem(environment.auth.sessionStorageKey);
        return;
      }

      this.authenticatedSubject.next(true);
      this.persistSession(Date.now());
      this.startInactivityWatcher();
    } catch {
      sessionStorage.removeItem(environment.auth.sessionStorageKey);
    }
  }

  private startInactivityWatcher(): void {
    this.stopInactivityWatcher();

    this.activitySubscription = merge(
      fromEvent(this.document, 'click'),
      fromEvent(this.document, 'keydown'),
      fromEvent(this.document, 'mousemove'),
      fromEvent(this.document, 'touchstart'),
    ).subscribe(() => {
      if (!this.isAuthenticated()) {
        return;
      }

      this.persistSession(Date.now());
      this.scheduleTimeout();
    });

    this.scheduleTimeout();
  }

  private stopInactivityWatcher(): void {
    this.activitySubscription?.unsubscribe();
    this.activitySubscription = undefined;

    if (this.inactivityTimer) {
      clearTimeout(this.inactivityTimer);
      this.inactivityTimer = undefined;
    }
  }

  private scheduleTimeout(): void {
    if (this.inactivityTimer) {
      clearTimeout(this.inactivityTimer);
    }

    this.inactivityTimer = setTimeout(() => {
      this.ngZone.run(() => {
        if (this.isAuthenticated()) {
          this.logout('Your session timed out after 10 minutes of inactivity.');
        }
      });
    }, environment.auth.inactivityTimeoutMs);
  }

  private persistSession(lastActive: number): void {
    const session: SessionState = {
      authenticated: true,
      lastActive,
    };

    sessionStorage.setItem(environment.auth.sessionStorageKey, JSON.stringify(session));
  }
}
