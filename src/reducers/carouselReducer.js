import {
  STORE_PICTURE_LIST,
  CHANGE_PICTURE_INPUT,
  CAROUSEL_FAILURE,
  DISPLAY_REMOVE_BOX,
  HIDE_REMOVE_BOX,
  ACTIVE_ONE_PICTURE,
} from '../actions/carouselActions';

export const initialState = {
  pictureList: [],
  failureMessages: [],
  removeBoxId: null,
  isRemoveBoxDisplayed: false,
  pictureInput: '',
  activePictureId: null,
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
        pictureInput: action.value,
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

    case ACTIVE_ONE_PICTURE:
      return {
        ...state,
        activePictureId: action.pictureId,
      };

    default:
      return state;
  }
};

export default pictureReducer;
