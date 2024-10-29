import {
  FETCH_NEWS_LIST,
  STORE_NEWS_LIST,
  DISPLAY_REMOVE_BOX,
  HIDE_REMOVE_BOX,
  CHANGE_NEWS_INPUT,
  POST_ADD_NEWS_FORM,
  POST_EDIT_NEWS_FORM,
  NEWS_FAILURE,
  FETCH_NEWS_DETAILS,
  STORE_NEWS_DETAILS,
  DELETE_NEWS,
} from './newsActions';

export interface FetchNewsListReturn {
  type: typeof FETCH_NEWS_LIST;
}

export interface News {
  id: number;
  title_fr: string;
  title_de: string;
  content_fr: string;
  content_de: string;
  image_url: string;
  createdAt: string;
  updatedAt: string;
}

export interface StoreNewsListReturn {
  type: typeof STORE_NEWS_LIST;
  newsList: News[];
}

export interface DisplayRemoveBoxReturn {
  type: typeof DISPLAY_REMOVE_BOX;
  newsId: number;
}

export interface HideRemoveBoxReturn {
  type: typeof HIDE_REMOVE_BOX;
}

export interface ChangeNewsInputReturn {
  type: typeof CHANGE_NEWS_INPUT;
  value: string;
  identifier: 'titleFr' | 'titleDe' | 'contentFr' | 'contentDe' | 'img64';
}

export interface PostAddNewsFormReturn {
  type: typeof POST_ADD_NEWS_FORM;
  navigate: () => void;
}

export interface PostEditNewsFormReturn {
  type: typeof POST_EDIT_NEWS_FORM;
  navigate: () => void;
}

export interface NewsFailureReturn {
  type: typeof NEWS_FAILURE;
  failureMessages: string[];
}

export interface FetchNewsDetailsReturn {
  type: typeof FETCH_NEWS_DETAILS;
  newsId: number;
}

export interface StoreNewsDetailsReturn {
  type: typeof STORE_NEWS_DETAILS;
  news: News;
}

export interface DeleteNewsReturn {
  type: typeof DELETE_NEWS;
  newsId: number;
}

export type NewsActionTypes =
  | FetchNewsListReturn
  | StoreNewsListReturn
  | DisplayRemoveBoxReturn
  | HideRemoveBoxReturn
  | ChangeNewsInputReturn
  | PostAddNewsFormReturn
  | PostEditNewsFormReturn
  | NewsFailureReturn
  | FetchNewsDetailsReturn
  | StoreNewsDetailsReturn
  | DeleteNewsReturn;
