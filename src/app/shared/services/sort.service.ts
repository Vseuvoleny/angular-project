import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SortOption } from 'src/app/types/sort';

@Injectable({
  providedIn: 'root',
})
export class SortService {
  private sortStream$ = new BehaviorSubject<SortOption | undefined>(undefined);

  public setSortOption(option: SortOption) {
    this.sortStream$.next(option);
  }

  public getSortOption() {
    return this.sortStream$.asObservable();
  }
}
