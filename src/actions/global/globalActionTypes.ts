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
  targetSection: 'identity' | 'media' | 'dates' | 'contact';
}

export type GlobalAction = ToogleLanguage | ToogleHeaderMenu | SetTargetSection;
