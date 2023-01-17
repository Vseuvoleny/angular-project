import { createReducer, createSelector, on } from '@ngrx/store';
import { AppState, VideoState } from '..';
import * as VideosAction from '../actions/videos.actions';

const initialState: VideoState = {
  videos: null,
  isFetching: false,
  isFetched: false,
  videoById: null,
};

export const reducer = createReducer(
  initialState,
  on(VideosAction.FetchVideosSuccess, (state, { videos }) => ({
    ...state,
    videos,
    isFetched: true,
  })),
  on(VideosAction.FetchVideoByIdSuccess, (state, { videoById }) => ({
    ...state,
    videoById,
    isFetched: true,
  })),
  on(VideosAction.FetchVideoError, (state) => ({
    ...state,
    isFetched: true,
  })),
  on(VideosAction.FetchVideoLoading, (state, { status }) => ({
    ...state,
    isFetching: status,
  })),
);

export const selectVideos = (state: AppState) => state.videos;
export const getVideos = createSelector(
  selectVideos,
  (state: VideoState) => state.videos,
);
export const getVideosFetching = createSelector(
  selectVideos,
  (state: VideoState) => state.isFetching,
);
export const getVideoById = createSelector(
  selectVideos,
  (state: VideoState) => state.videoById,
);
