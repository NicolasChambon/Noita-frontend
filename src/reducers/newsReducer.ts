import { NewsActionsType } from '../actions/actionsIndex';

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
