import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as VideosActions from '../actions/videos.actions';
import { VideoService } from 'src/app/shared/services/video.service';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class VideosEffects {
  constructor(private actions$: Actions, private videoService: VideoService) {}

  fetchVideos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VideosActions.fetchVideo),
      mergeMap((action: any) =>
        this.videoService.fetchVideos(action.parameters).pipe(
          map((videos) => VideosActions.FetchVideosSuccess({ videos })),
          catchError(() => of(VideosActions.FetchVideoError())),
        ),
      ),
    ),
  );

  fetchVideoById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VideosActions.FetchVideoById),
      mergeMap((action: any) =>
        this.videoService.fetchVideoById(action.parameters).pipe(
          map((videoById) =>
            VideosActions.FetchVideoByIdSuccess({ videoById }),
          ),
          catchError(() => of(VideosActions.FetchVideoError())),
        ),
      ),
    ),
  );
}
