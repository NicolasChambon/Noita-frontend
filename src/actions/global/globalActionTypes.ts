import { SectionId } from '../../types/sectionId.type';
import { GlobalActionsEnum } from '../actionsIndex';

export interface ToogleLanguage {
  type: typeof GlobalActionsEnum.TOOGLE_LANGUAGE;
  language: 'de' | 'fr';
}

export interface ToogleHeaderMenu {
  type: typeof GlobalActionsEnum.TOOGLE_HEADER_MENU;
}

export interface SetTargetSection {
  type: typeof GlobalActionsEnum.SET_TARGET_SECTION;
  targetSection: SectionId;
}

export type GlobalAction = ToogleLanguage | ToogleHeaderMenu | SetTargetSection;
