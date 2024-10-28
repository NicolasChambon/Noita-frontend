import {
  TOOGLE_LANGUAGE,
  TOOGLE_HEADER_MENU,
  SET_TARGET_SECTION,
} from './globalActions';

export interface ToogleLanguageReturn {
  type: typeof TOOGLE_LANGUAGE;
  language: 'de' | 'fr';
}

export interface ToogleHeaderMenuReturn {
  type: typeof TOOGLE_HEADER_MENU;
}

export interface SetTargetSectionReturn {
  type: typeof SET_TARGET_SECTION;
  targetSection: 'identity' | 'media' | 'dates' | 'contact';
}

export type GlobalAction =
  | ToogleLanguageReturn
  | ToogleHeaderMenuReturn
  | SetTargetSectionReturn;
