import { GlobalActionsType } from '../actions/actionsIndex';
import { GlobalActionReturnTypes } from '../actions/global/globalActionReturnTypes';

export interface GlobalState {
  language: 'de' | 'fr';
  headerMenu: boolean;
  targetSection: 'identity' | 'media' | 'dates' | 'contact' | ''; // TODO réfléchir créer un type SectionType (car utilisé dans plusieurs fichiers)
}

export const initialState: GlobalState = {
  language: 'de',
  headerMenu: false,
  targetSection: '',
};

const globalReducer = (
  state: GlobalState = initialState,
  action: GlobalActionReturnTypes,
): GlobalState => {
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
