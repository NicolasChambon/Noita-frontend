import {
  FetchNewsListReturn,
  News,
  StoreNewsListReturn,
  DisplayRemoveBoxReturn,
  HideRemoveBoxReturn,
  ChangeNewsInputReturn,
  PostAddNewsFormReturn,
  PostEditNewsFormReturn,
  NewsFailureReturn,
  FetchNewsDetailsReturn,
  StoreNewsDetailsReturn,
  DeleteNewsReturn,
} from './newsActionTypes';

export const FETCH_NEWS_LIST = 'FETCH_NEWS_LIST';
export const STORE_NEWS_LIST = 'STORE_NEWS_LIST';
export const DISPLAY_REMOVE_BOX = 'DISPLAY_REMOVE_BOX';
export const HIDE_REMOVE_BOX = 'HIDE_REMOVE_BOX';
export const CHANGE_NEWS_INPUT = 'CHANGE_NEWS_INPUT';
export const POST_ADD_NEWS_FORM = 'POST_ADD_NEWS_FORM';
export const POST_EDIT_NEWS_FORM = 'POST_EDIT_NEWS_FORM';
export const NEWS_FAILURE = 'NEWS_FAILURE';
export const FETCH_NEWS_DETAILS = 'FETCH_NEWS_DETAILS';
export const STORE_NEWS_DETAILS = 'STORE_NEWS_DETAILS';
export const DELETE_NEWS = 'DELETE_NEWS';

export const fetchNewsList = (): FetchNewsListReturn => {
  return {
    type: FETCH_NEWS_LIST,
  };
};

export const storeNewsList = (newsList: News[]): StoreNewsListReturn => {
  return {
    type: STORE_NEWS_LIST,
    newsList,
  };
};

export const displayRemoveBox = (newsId: number): DisplayRemoveBoxReturn => {
  return {
    type: DISPLAY_REMOVE_BOX,
    newsId,
  };
};

export const hideRemoveBox = (): HideRemoveBoxReturn => {
  return {
    type: HIDE_REMOVE_BOX,
  };
};

export const changeNewsInput = (
  value: string,
  identifier: 'titleFr' | 'titleDe' | 'contentFr' | 'contentDe' | 'img64',
): ChangeNewsInputReturn => {
  return {
    type: CHANGE_NEWS_INPUT,
    value,
    identifier,
  };
};

export const postAddNewsForm = (
  navigate: () => void,
): PostAddNewsFormReturn => {
  return {
    type: POST_ADD_NEWS_FORM,
    navigate,
  };
};

export const postEditNewsForm = (
  navigate: () => void,
): PostEditNewsFormReturn => {
  return {
    type: POST_EDIT_NEWS_FORM,
    navigate,
  };
};

export const newsFailure = (failureMessages: string[]): NewsFailureReturn => {
  return {
    type: NEWS_FAILURE,
    failureMessages,
  };
};

export const fetchNewsDetails = (newsId: number): FetchNewsDetailsReturn => {
  return {
    type: FETCH_NEWS_DETAILS,
    newsId,
  };
};

export const storeNewsDetails = (newsDetails: News): StoreNewsDetailsReturn => {
  return {
    type: STORE_NEWS_DETAILS,
    newsDetails,
  };
};

export const deleteNews = (newsId: number): DeleteNewsReturn => {
  return {
    type: DELETE_NEWS,
    newsId,
  };
};
