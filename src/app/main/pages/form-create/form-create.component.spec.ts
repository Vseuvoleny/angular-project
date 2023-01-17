import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { FormCreateComponent } from './form-create.component';

describe('FormCreateComponent', () => {
  let component: FormCreateComponent;
  let fixture: ComponentFixture<FormCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormCreateComponent],
      providers: [provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(FormCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('title', () => {
    it('should have title with text "Create new card"', () => {
      const title = fixture.nativeElement.querySelector('.create-form__title');
      expect(title.textContent).toContain('Create new card');
    });
  });

  // describe('#postForm', () => {
  //   it('should run dispatch in store', () => {
  //     const spy = spyOnProperty(component,'');
  //   });
  // });
});
