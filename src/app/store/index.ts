export interface VideoState {
  videos: any;
  videoById: any;
  isFetching: boolean;
  isFetched: boolean;
}

export interface CustomCardsState {
  customCards: any;
  isFetching: boolean;
}

export interface AppState {
  videos: VideoState;
  cards: CustomCardsState;
}
