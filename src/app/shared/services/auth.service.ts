import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(
    Boolean(localStorage.getItem('auth')),
  );

  constructor(private router: Router) {}

  public logIn() {
    const now = new Date();

    const token = {
      token: 'some token',
      expiry: now.getTime() + 60000 * 100,
    };

    localStorage.setItem('auth', JSON.stringify(token));
    this.isAuthenticated.next(true);
  }

  public logOut() {
    localStorage.removeItem('auth');
    this.isAuthenticated.next(false);
    // this.router.navigate(['/auth']);
  }

  public getToken(): string | void {
    const tokenFromStorage = localStorage.getItem('auth');
    if (tokenFromStorage) return JSON.parse(tokenFromStorage).token;
  }

  public isAuth() {
    this.checkExpireToken();
    return this.isAuthenticated.asObservable();
  }

  private checkExpireToken() {
    const itemStr = localStorage.getItem('auth');
    if (!itemStr) {
      return null;
    }
    const item = JSON.parse(itemStr);
    const now = new Date();
    if (now.getTime() > item.expiry) {
      this.logOut();
    }

    return null;
  }
}
