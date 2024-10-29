import { GlobalActionsType } from '../actions/actionsIndex';

export const initialState = {
  language: 'de',
  headerMenu: false,
  targetSection: '',
};

const globalReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GlobalActionsType.TOOGLE_LANGUAGE:
      return {
        ...state,
        language: action.language,
      };
    case GlobalActionsType.TOOGLE_HEADER_MENU:
      return {
        ...state,
        headerMenu: !state.headerMenu,
      };
    case GlobalActionsType.SET_TARGET_SECTION:
      return {
        ...state,
        targetSection: action.targetSection,
      };
    default:
      return state;
  }
};

export default globalReducer;
