import {
  STORE_NEWS_LIST,
  DISPLAY_REMOVE_BOX,
  HIDE_REMOVE_BOX,
  CHANGE_NEWS_INPUT,
  NEWS_FAILURE,
  STORE_NEWS_DETAILS,
} from '../actions/newsActions';

export const initialState = {
  newsList: [],
  newsDetails: {},
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

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_NEWS_LIST:
      return {
        ...state,
        newsList: action.newsList,
      };

    case DISPLAY_REMOVE_BOX:
      return {
        ...state,
        removeBoxId: action.newsId,
        isRemoveBoxDisplayed: true,
      };

    case HIDE_REMOVE_BOX:
      return {
        ...state,
        removeBoxId: null,
        isRemoveBoxDisplayed: false,
      };

    case CHANGE_NEWS_INPUT:
      return {
        ...state,
        form: {
          ...state.form,
          [action.identifier]: action.value,
        },
      };

    case NEWS_FAILURE:
      return {
        ...state,
        failureMessages: action.failureMessages,
      };

    case STORE_NEWS_DETAILS:
      return {
        ...state,
        newsDetails: action.newsDetails,
      };

    default:
      return state;
  }
};

export default newsReducer;
