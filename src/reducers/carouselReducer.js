import {
  STORE_PICTURE_LIST,
  CHANGE_PICTURE_INPUT,
  CAROUSEL_FAILURE,
  DISPLAY_REMOVE_BOX,
  HIDE_REMOVE_BOX,
} from '../actions/carouselActions';

export const initialState = {
  pictureList: [],
  failureMessages: [],
  removeBoxId: null,
  isRemoveBoxDisplayed: false,
  newPictureInput: '',
};

const pictureReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_PICTURE_LIST:
      return {
        ...state,
        pictureList: action.pictureList,
      };

    case CHANGE_PICTURE_INPUT:
      return {
        ...state,
        newPictureInput: action.value,
      };

    case CAROUSEL_FAILURE:
      return {
        ...state,
        failureMessages: action.failureMessages,
      };

    case DISPLAY_REMOVE_BOX:
      return {
        ...state,
        removeBoxId: action.pictureId,
        isRemoveBoxDisplayed: true,
      };

    case HIDE_REMOVE_BOX:
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
