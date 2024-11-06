import { SectionId } from '../../types/sectionId.type';
import { GlobalActionsEnum } from '../actionsIndex';
import {
  ToogleLanguage,
  ToogleHeaderMenu,
  SetTargetSection,
} from './globalActionTypes';

export const toogleLanguage = (language: 'de' | 'fr'): ToogleLanguage => ({
  type: GlobalActionsEnum.TOOGLE_LANGUAGE,
  language,
});

export const toogleHeaderMenu = (): ToogleHeaderMenu => ({
  type: GlobalActionsEnum.TOOGLE_HEADER_MENU,
});

export const setTargetSection = (
  targetSection: SectionId,
): SetTargetSection => ({
  type: GlobalActionsEnum.SET_TARGET_SECTION,
  targetSection,
});
