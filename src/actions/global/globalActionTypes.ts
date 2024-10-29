import { GlobalActionsType } from '../actionsIndex';

export interface ToogleLanguageReturn {
  type: typeof GlobalActionsType.TOOGLE_LANGUAGE;
  language: 'de' | 'fr';
}

export interface ToogleHeaderMenuReturn {
  type: typeof GlobalActionsType.TOOGLE_HEADER_MENU;
}

export interface SetTargetSectionReturn {
  type: typeof GlobalActionsType.SET_TARGET_SECTION;
  targetSection: 'identity' | 'media' | 'dates' | 'contact';
}

export type GlobalActionTypes =
  | ToogleLanguageReturn
  | ToogleHeaderMenuReturn
  | SetTargetSectionReturn;
