import { GlobalActionsType } from '../actionsIndex';
import {
  ToogleLanguageReturn,
  ToogleHeaderMenuReturn,
  SetTargetSectionReturn,
} from './globalActionTypes';

export const toogleLanguage = (
  language: 'de' | 'fr',
): ToogleLanguageReturn => ({
  type: GlobalActionsType.TOOGLE_LANGUAGE,
  language,
});

export const toogleHeaderMenu = (): ToogleHeaderMenuReturn => ({
  type: GlobalActionsType.TOOGLE_HEADER_MENU,
});

export const setTargetSection = (
  targetSection: 'identity' | 'media' | 'dates' | 'contact',
): SetTargetSectionReturn => ({
  type: GlobalActionsType.SET_TARGET_SECTION,
  targetSection,
});
