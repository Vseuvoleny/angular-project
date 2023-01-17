import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FilterService } from 'src/app/shared/services/filter.service';
import { SortService } from 'src/app/shared/services/sort.service';
import { VideoService } from 'src/app/shared/services/video.service';
import { VideoItem } from '../../../types/card';
import * as FromVideo from '../../../store/reducers/videos.reducer';
import { map, Observable } from 'rxjs';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public filterValue: string = '';
  public cards$ = new Observable<VideoItem[] | undefined>();
  public isFetched$ = new Observable<boolean>();

  constructor(
    private dataService: VideoService,
    private sortService: SortService,
    private filterService: FilterService,
    private store: Store<AppState>,
  ) {
    const filterValue$ = this.filterService.getFilterStream();
    filterValue$.subscribe({
      next: (value: string) => {
        this.filterValue = value;
      },
    });
  }

  ngOnInit() {
    this.isFetched$ = this.store.select(FromVideo.getVideosFetching);
    this.cards$ = this.store.select(FromVideo.getVideos).pipe(map((e) => e));
  }
}
