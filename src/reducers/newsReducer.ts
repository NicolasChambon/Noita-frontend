import { NewsActionsType } from '../actions/actionsIndex';
import {
  News,
  NewsActionReturnTypes,
} from '../actions/news/newsActionReturnTypes';

// TODO à déplacer ?
export interface NewsForm {
  titleFr: string;
  titleDe: string;
  contentFr: string;
  contentDe: string;
  img64: string;
}

export interface NewsState {
  newsList: News[];
  newsDetails: News | null;
  removeBoxId: number | null;
  isRemoveBoxDisplayed: boolean;
  form: NewsForm;
  failureMessages: string[];
}

export const initialState: NewsState = {
  newsList: [],
  newsDetails: null,
  removeBoxId: null,
  isRemoveBoxDisplayed: false,
  form: {
    titleFr: '',
    titleDe: '',
    contentFr: '',
    contentDe: '',
    img64: '',
  },
  failureMessages: [],
};

const newsReducer = (
  state: NewsState = initialState,
  action: NewsActionReturnTypes,
): NewsState => {
  switch (action.type) {
    case NewsActionsType.STORE_NEWS_LIST:
      return {
        ...state,
        newsList: action.newsList,
      };

    case NewsActionsType.DISPLAY_REMOVE_BOX:
      return {
        ...state,
        removeBoxId: action.newsId,
        isRemoveBoxDisplayed: true,
      };

    case NewsActionsType.HIDE_REMOVE_BOX:
      return {
        ...state,
        removeBoxId: null,
        isRemoveBoxDisplayed: false,
      };

    case NewsActionsType.CHANGE_NEWS_INPUT:
      return {
        ...state,
        form: {
          ...state.form,
          [action.identifier]: action.value,
        },
      };

    case NewsActionsType.NEWS_FAILURE:
      return {
        ...state,
        failureMessages: action.failureMessages,
      };

    case NewsActionsType.STORE_NEWS_DETAILS:
      return {
        ...state,
        newsDetails: action.newsDetails,
      };

    default:
      return state;
  }
};

export default newsReducer;
