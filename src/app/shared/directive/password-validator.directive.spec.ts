import { AbstractControl } from '@angular/forms';
import { PasswordValidator } from './password-validator.directive';

describe('PasswordValidatorDirective', () => {
  it('should create an instance', () => {
    const directive = PasswordValidator();
    expect(directive).toBeTruthy();
  });

  describe('#PasswordValidator', () => {
    it('should return error obj if length < 8', () => {
      const directive = PasswordValidator();
      expect(directive({ value: 'abc' } as AbstractControl)).toEqual({
        wrongPassword: true,
      });
    });
    it('should return error obj if it doesnt contain upper symbol', () => {
      const directive = PasswordValidator();
      expect(directive({ value: 'abcdefrr' } as AbstractControl)).toEqual({
        wrongPassword: true,
      });
    });
    it('should return error obj if it doesnt contain lower symbol', () => {
      const directive = PasswordValidator();
      expect(directive({ value: 'ABCDEFRR' } as AbstractControl)).toEqual({
        wrongPassword: true,
      });
    });
    it('should return error obj if it doesnt contain spec symbol', () => {
      const directive = PasswordValidator();
      expect(directive({ value: 'Skyrim11' } as AbstractControl)).toEqual({
        wrongPassword: true,
      });
    });
    it('should return null if password ok', () => {
      const directive = PasswordValidator();
      expect(directive({ value: 'Skyrim11-' } as AbstractControl)).toBeNull();
    });
  });
});
