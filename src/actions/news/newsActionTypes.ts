import { NewsActionsType } from '../actionsIndex';

export interface FetchNewsListReturn {
  type: typeof NewsActionsType.FETCH_NEWS_LIST;
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
  type: typeof NewsActionsType.STORE_NEWS_LIST;
  newsList: News[];
}

export interface DisplayRemoveBoxReturn {
  type: typeof NewsActionsType.DISPLAY_REMOVE_BOX;
  newsId: number;
}

export interface HideRemoveBoxReturn {
  type: typeof NewsActionsType.HIDE_REMOVE_BOX;
}

export interface ChangeNewsInputReturn {
  type: typeof NewsActionsType.CHANGE_NEWS_INPUT;
  value: string;
  identifier: 'titleFr' | 'titleDe' | 'contentFr' | 'contentDe' | 'img64';
}

export interface PostAddNewsFormReturn {
  type: typeof NewsActionsType.POST_ADD_NEWS_FORM;
  navigate: () => void;
}

export interface PostEditNewsFormReturn {
  type: typeof NewsActionsType.POST_EDIT_NEWS_FORM;
  navigate: () => void;
}

export interface NewsFailureReturn {
  type: typeof NewsActionsType.NEWS_FAILURE;
  failureMessages: string[];
}

export interface FetchNewsDetailsReturn {
  type: typeof NewsActionsType.FETCH_NEWS_DETAILS;
  newsId: number;
}

export interface StoreNewsDetailsReturn {
  type: typeof NewsActionsType.STORE_NEWS_DETAILS;
  newsDetails: News;
}

export interface DeleteNewsReturn {
  type: typeof NewsActionsType.DELETE_NEWS;
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
