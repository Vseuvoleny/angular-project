import { createAction, props } from '@ngrx/store';
const ActionSource = '[Custom-Cards]';
export const fetchCustomCards = createAction(
  `${ActionSource} Fetch Custom Card`,
  props<{ customCards: any }>(),
);
export const FetchCustomCardsSuccess = createAction(
  `${ActionSource} Fetch Success`,
  props<{ customCards: any }>(),
);
export const FetchingCustomCard = createAction(
  `${ActionSource} Fetch Loading`,
  props<{ status: boolean }>(),
);
export const FetchCustomCardsError = createAction(
  `${ActionSource} Fetch Error`,
);
