import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, map, mergeMap } from 'rxjs';
import { Item, StatisticItem } from 'src/app/types/card';
import { Store } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { FetchVideoLoading } from '../../store/actions/videos.actions';
import { AppState } from 'src/app/store';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  private domain: string = '';

  constructor(private http: HttpClient, private store: Store<AppState>) {
    this.domain = environment.domain;
  }

  public fetchVideos(value: string) {
    this.store.dispatch(FetchVideoLoading({ status: true }));
    return this.http
      .get(
        `${this.domain}/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video`,
      )
      .pipe(
        mergeMap(({ items }: any) => {
          const ids = items.map((item: Item) => item.id.videoId).join(',');

          return this.http
            .get(`${this.domain}/youtube/v3/videos?part=statistics&id=${ids}`)
            .pipe(
              map(({ items: statisticsItem }: any) =>
                items.map((item: StatisticItem, idx: number) => ({
                  ...item,
                  statistics: statisticsItem[idx].statistics,
                })),
              ),
            );
        }),
        finalize(() => {
          this.store.dispatch(FetchVideoLoading({ status: false }));
        }),
      );
  }

  /**
   * fetchVideoById
   */
  public fetchVideoById(id: string) {
    // this.store.dispatch()

    return this.http
      .get(
        `${this.domain}/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&type=video`,
      )
      .pipe(
        finalize(() => {
          // this.store.dispatch()
        }),
      );
  }
}
