import { createAction, props } from '@ngrx/store';
const ActionSource = '[Video]';
export const fetchVideo = createAction(
  `${ActionSource} Fetch User`,
  props<any>(),
);
export const FetchVideosSuccess = createAction(
  `${ActionSource} Fetch Success`,
  props<any>(),
);
export const FetchVideoError = createAction(`${ActionSource} Fetch Error`);
export const FetchVideoLoading = createAction(
  `${ActionSource} Fetch Loading`,
  props<{ status: boolean }>(),
);
export const FetchVideoByIdSuccess = createAction(
  `${ActionSource} Fetch Success By Id`,
  props<any>(),
);
export const FetchVideoById = createAction(
  `${ActionSource} Fetch By Id`,
  props<any>(),
);
