import {
  Component,
  Output,
  EventEmitter,
  AfterContentInit,
  OnDestroy,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, skip, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as VideoAction from '../../../store/actions/videos.actions';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements AfterContentInit, OnDestroy {
  @Output() toggleEmit = new EventEmitter();
  public searchControl = new FormControl('');
  public inputSub: Subscription | undefined;

  constructor(private store: Store<AppState>) {}

  public toggleSorting() {
    this.toggleEmit.emit();
  }

  ngAfterContentInit() {
    this.inputSub = this.searchControl.valueChanges
      .pipe(skip(3), debounceTime(500))
      .subscribe((data) => {
        if (data) {
          this.store.dispatch(VideoAction.fetchVideo({ parameters: data }));
        }
      });
  }

  ngOnDestroy() {
    if (this.inputSub) this.inputSub.unsubscribe();
  }
}
