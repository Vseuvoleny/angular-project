import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function PasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const password = control.value;
    if (password.length === 0) return null;
    const lengthValidator = password.length >= 8;
    const isLowAndUpper =
      password.toLowerCase() !== password &&
      password.toUpperCase() !== password;
    const hasSpecSymbol = format.test(password);
    const isValid = lengthValidator && isLowAndUpper && hasSpecSymbol;

    return isValid ? null : { wrongPassword: true };
  };
}
