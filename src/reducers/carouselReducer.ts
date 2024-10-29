import { CarouselActionsType } from '../actions/actionsIndex';

export const initialState = {
  pictureList: [],
  failureMessages: [],
  removeBoxId: null,
  isRemoveBoxDisplayed: false,
  pictureInput: '',
};

const pictureReducer = (state = initialState, action) => {
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

export default pictureReducer;
