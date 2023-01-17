import { createReducer, createSelector, on } from '@ngrx/store';
import { AppState, CustomCardsState } from '..';
import * as CardsActionAction from '../actions/custom-cards.actions';

const initialState: CustomCardsState = {
  customCards: null,
  isFetching: false,
};

export const reducer = createReducer(
  initialState,
  on(CardsActionAction.fetchCustomCards, (state, { customCards }) => ({
    ...state,
    customCards,
  })),
  on(CardsActionAction.FetchingCustomCard, (state, { status }) => ({
    ...state,
    isFetching: status,
  })),
);

export const selectVideos = (state: AppState) => state.cards;
export const getCards = createSelector(
  selectVideos,
  (state: CustomCardsState) => state.customCards,
);
export const getFetching = createSelector(
  selectVideos,
  (state: CustomCardsState) => state.isFetching,
);
