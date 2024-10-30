import { CarouselActionsEnum } from '../actions/actionsIndex';
import {
  CarouselAction,
  Picture,
} from '../actions/carousel/carouselActionTypes';

export interface CarouselState {
  pictureList: Picture[];
  failureMessages: string[];
  removeBoxId: number | null;
  isRemoveBoxDisplayed: boolean;
  pictureInput: string;
}

export const initialState: CarouselState = {
  pictureList: [],
  failureMessages: [],
  removeBoxId: null,
  isRemoveBoxDisplayed: false,
  pictureInput: '', // base64 string
};

const carouselReducer = (
  state: CarouselState = initialState,
  action: CarouselAction,
): CarouselState => {
  switch (action.type) {
    case CarouselActionsEnum.STORE_PICTURE_LIST:
      return {
        ...state,
        pictureList: action.pictureList,
      };

    case CarouselActionsEnum.CHANGE_PICTURE_INPUT:
      return {
        ...state,
        pictureInput: action.value,
      };

    case CarouselActionsEnum.CAROUSEL_FAILURE:
      return {
        ...state,
        failureMessages: action.failureMessages,
      };

    case CarouselActionsEnum.DISPLAY_REMOVE_BOX:
      return {
        ...state,
        removeBoxId: action.pictureId,
        isRemoveBoxDisplayed: true,
      };

    case CarouselActionsEnum.HIDE_REMOVE_BOX:
      return {
        ...state,
        removeBoxId: null,
        isRemoveBoxDisplayed: false,
      };

    default:
      return state;
  }
};

export default carouselReducer;
