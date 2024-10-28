import {
  ToogleLanguageReturn,
  ToogleHeaderMenuReturn,
  SetTargetSectionReturn,
} from './globalActionTypes';

export const TOOGLE_LANGUAGE = 'TOOGLE_LANGUAGE';
export const TOOGLE_HEADER_MENU = 'TOOGLE_HEADER_MENU';
export const SET_TARGET_SECTION = 'SET_TARGET_SECTION';

export const toogleLanguage = (
  language: 'de' | 'fr',
): ToogleLanguageReturn => ({
  type: TOOGLE_LANGUAGE,
  language,
});

export const toogleHeaderMenu = (): ToogleHeaderMenuReturn => ({
  type: TOOGLE_HEADER_MENU,
});

export const setTargetSection = (
  targetSection: 'identity' | 'media' | 'dates' | 'contact',
): SetTargetSectionReturn => ({
  type: SET_TARGET_SECTION,
  targetSection,
});
