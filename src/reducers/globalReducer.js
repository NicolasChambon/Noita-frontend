import { TOOGLE_LANGUAGE, TOOGLE_HEADER_MENU } from '../actions/globalActions';

export const initialState = {
  language: 'fr',
  headerMenu: false,
};

const globalReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOOGLE_LANGUAGE:
      return {
        ...state,
        language: action.language,
      };
    case TOOGLE_HEADER_MENU:
      return {
        ...state,
        headerMenu: !state.headerMenu,
      };
    default:
      return state;
  }
};

export default globalReducer;
