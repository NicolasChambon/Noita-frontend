import { NewsActionsType } from '../actionsIndex';
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
} from './newsActionReturnTypes';

export const fetchNewsList = (): FetchNewsListReturn => {
  return {
    type: NewsActionsType.FETCH_NEWS_LIST,
  };
};

export const storeNewsList = (newsList: News[]): StoreNewsListReturn => {
  return {
    type: NewsActionsType.STORE_NEWS_LIST,
    newsList,
  };
};

export const displayRemoveBox = (newsId: number): DisplayRemoveBoxReturn => {
  return {
    type: NewsActionsType.DISPLAY_REMOVE_BOX,
    newsId,
  };
};

export const hideRemoveBox = (): HideRemoveBoxReturn => {
  return {
    type: NewsActionsType.HIDE_REMOVE_BOX,
  };
};

export const changeNewsInput = (
  value: string,
  identifier: 'titleFr' | 'titleDe' | 'contentFr' | 'contentDe' | 'img64',
): ChangeNewsInputReturn => {
  return {
    type: NewsActionsType.CHANGE_NEWS_INPUT,
    value,
    identifier,
  };
};

export const postAddNewsForm = (
  navigate: () => void,
): PostAddNewsFormReturn => {
  return {
    type: NewsActionsType.POST_ADD_NEWS_FORM,
    navigate,
  };
};

export const postEditNewsForm = (
  navigate: () => void,
): PostEditNewsFormReturn => {
  return {
    type: NewsActionsType.POST_EDIT_NEWS_FORM,
    navigate,
  };
};

export const newsFailure = (failureMessages: string[]): NewsFailureReturn => {
  return {
    type: NewsActionsType.NEWS_FAILURE,
    failureMessages,
  };
};

export const fetchNewsDetails = (newsId: number): FetchNewsDetailsReturn => {
  return {
    type: NewsActionsType.FETCH_NEWS_DETAILS,
    newsId,
  };
};

export const storeNewsDetails = (newsDetails: News): StoreNewsDetailsReturn => {
  return {
    type: NewsActionsType.STORE_NEWS_DETAILS,
    newsDetails,
  };
};

export const deleteNews = (newsId: number): DeleteNewsReturn => {
  return {
    type: NewsActionsType.DELETE_NEWS,
    newsId,
  };
};
