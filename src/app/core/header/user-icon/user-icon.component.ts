import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-user-icon',
  templateUrl: './user-icon.component.html',
  styleUrls: ['./user-icon.component.scss'],
})
export class UserIconComponent implements OnInit {
  public isAuth$ = new Observable<boolean>();

  constructor(private authService: AuthService, private route: Router) {}

  ngOnInit() {
    this.isAuth$ = this.authService.isAuth();
  }

  public logOut() {
    this.authService.logOut();
  }

  public logIn() {
    this.route.navigate(['/auth']);
  }

  public logToggler(isAuth$: Observable<boolean>) {
    let isAuth;
    isAuth$.subscribe({
      next: (state) => {
        isAuth = state;
      },
    });
    return isAuth ? this.logOut() : this.logIn();
  }
}
