import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingFieldComponent } from './sorting-field.component';

describe('SortingFieldComponent', () => {
  let component: SortingFieldComponent;
  let fixture: ComponentFixture<SortingFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortingFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortingFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
