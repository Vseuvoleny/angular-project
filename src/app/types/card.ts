export interface Video {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: Item[];
  regionCode: string;
  nextPageToken: string;
}

export interface VideoItem extends Item {
  statistics: Statistics;
}

interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface Item {
  kind: string;
  etag: string;
  id: ItemId;
  snippet: Snippet;
  statistics: Statistics;
}

export interface ItemId {
  kind: string;
  videoId: string;
}

export interface Statistic {
  etag: string;
  kind: string;
  pageInfo: PageInfo;
  items: StatisticItem[];
}

export interface StatisticItem {
  etag: string;
  id: string;
  kind: string;
  statistics: Statistics;
}

interface Statistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}
interface Localized {
  description: string;
  title: string;
}

interface Snippet {
  publishedAt: Date | string;
  publishTime: Date;
  channelId: string;
  channelTitle: string;
  title: string;
  description: string;
  liveBroadcastContent: string;
  thumbnails: Record<ThumbnailType, Thumbnail>;
  localized: Localized;
}

interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

type ThumbnailType = 'default' | 'medium' | 'high' | 'standard' | 'maxres';
export type SortingOptions = 'date' | 'count of view';
