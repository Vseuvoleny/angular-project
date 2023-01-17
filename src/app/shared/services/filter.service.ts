import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private filterStream$ = new BehaviorSubject<string>('');

  public getFilterStream() {
    return this.filterStream$.asObservable();
  }

  public setFilterStream(value: string) {
    this.filterStream$.next(value);
  }
}
