import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Subscription } from 'rxjs';
import { UserIconComponent } from './user-icon.component';

describe('UserIconComponent', () => {
  let component: UserIconComponent;
  let fixture: ComponentFixture<UserIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserIconComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(UserIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#onDestroy', () => {
    it('should unsubscribe before on Destroy', () => {
      const spy = spyOn(Subscription.prototype, 'unsubscribe');
      component.ngOnDestroy();
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
