import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { provideMockStore } from '@ngrx/store/testing';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      providers: [provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngAfterContentInit', () => {
    it('should init search form as subscription', () => {
      component.ngAfterContentInit();
      expect(component.inputSub).not.toBeUndefined();
    });
  });

  describe('#searchControl', () => {
    it('should be FormControls instance', () => {
      expect(component.searchControl).toBeInstanceOf(FormControl);
    });
  });

  describe('#ngOnDestroy', () => {
    it('should unsubscribe before onDestoy', () => {
      const spy = spyOn(Subscription.prototype, 'unsubscribe');
      component.ngOnDestroy();
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
