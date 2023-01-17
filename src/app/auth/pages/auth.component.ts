import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordValidator } from 'src/app/shared/directive/password-validator.directive';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  public authForm = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, PasswordValidator()]),
  });

  constructor(private authService: AuthService, private route: Router) {}

  public isShowed: boolean = true;

  public login() {
    this.authService.logIn();
    this.isShowed = false;
    setTimeout(() => {
      this.route.navigate(['main']);
    }, 500);
  }
}
