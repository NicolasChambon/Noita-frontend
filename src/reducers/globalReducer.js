import {
  TOOGLE_LANGUAGE,
  TOOGLE_HEADER_MENU,
  SET_TARGET_SECTION,
} from '../actions/globalActions';

export const initialState = {
  language: 'de',
  headerMenu: false,
  targetSection: '',
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
    case SET_TARGET_SECTION:
      return {
        ...state,
        targetSection: action.targetSection,
      };
    default:
      return state;
  }
};

export default globalReducer;
