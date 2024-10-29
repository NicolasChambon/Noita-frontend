import { CarouselActionsType } from '../actions/actionsIndex';
import {
  CarouselActionReturnTypes,
  Picture,
} from '../actions/carousel/carouselActionReturnTypes';

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
  action: CarouselActionReturnTypes,
): CarouselState => {
  switch (action.type) {
    case CarouselActionsType.STORE_PICTURE_LIST:
      return {
        ...state,
        pictureList: action.pictureList,
      };

    case CarouselActionsType.CHANGE_PICTURE_INPUT:
      return {
        ...state,
        pictureInput: action.value,
      };

    case CarouselActionsType.CAROUSEL_FAILURE:
      return {
        ...state,
        failureMessages: action.failureMessages,
      };

    case CarouselActionsType.DISPLAY_REMOVE_BOX:
      return {
        ...state,
        removeBoxId: action.pictureId,
        isRemoveBoxDisplayed: true,
      };

    case CarouselActionsType.HIDE_REMOVE_BOX:
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
