import { GlobalActionsEnum } from '../actions/actionsIndex';
import { GlobalAction } from '../actions/global/globalActionTypes';

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
  action: GlobalAction,
): GlobalState => {
  switch (action.type) {
    case GlobalActionsEnum.TOOGLE_LANGUAGE:
      return {
        ...state,
        language: action.language,
      };
    case GlobalActionsEnum.TOOGLE_HEADER_MENU:
      return {
        ...state,
        headerMenu: !state.headerMenu,
      };
    case GlobalActionsEnum.SET_TARGET_SECTION:
      return {
        ...state,
        targetSection: action.targetSection,
      };
    default:
      return state;
  }
};

export default globalReducer;
