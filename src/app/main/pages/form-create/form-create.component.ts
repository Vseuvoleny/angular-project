import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as CustomCard from '../../../store/reducers/custom-cards.reducer';
import * as CustomCardActions from '../../../store/actions/custom-cards.actions';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.scss'],
})
export class FormCreateComponent implements OnInit {
  public isFetching$ = new Observable<boolean>();
  private readonly URL_PATTERN = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

  public cards$ = new Observable();
  constructor(private store: Store<AppState>) {}

  public createForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    description: new FormControl('', [Validators.maxLength(255)]),
    image: new FormControl('', [
      Validators.required,
      Validators.pattern(this.URL_PATTERN),
    ]),
    link: new FormControl('', [
      Validators.required,
      Validators.pattern(this.URL_PATTERN),
    ]),
  });

  ngOnInit() {
    this.isFetching$ = this.store.select(CustomCard.getFetching);
  }

  public postForm() {
    if (this.createForm.invalid) return;
    this.store.dispatch(
      CustomCardActions.fetchCustomCards({
        customCards: this.createForm.value,
      }),
    );
  }
}
