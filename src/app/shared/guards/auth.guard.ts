import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private route: Router, private authService: AuthService) {}

  canActivate(): // route: any,
  // state: any,
  // _route: ActivatedRouteSnapshot,
  // _state: RouterStateSnapshot,

  | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let isAuth;
    this.authService.isAuth().subscribe({
      next: (value) => {
        isAuth = value;
      },
    });
    if (isAuth) return true;

    return this.route.parseUrl('/auth');
  }
}
