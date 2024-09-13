import {
  STORE_PICTURE_LIST,
  CHANGE_PICTURE_INPUT,
  CAROUSEL_FAILURE,
  // DISPLAY_REMOVE_BOX,
  // HIDE_REMOVE_BOX,
  // STORE_NEWS_DETAILS,
} from '../actions/carouselActions';

export const initialState = {
  pictureList: [],
  failureMessages: [],
  newPictureInput: '',
  // pictureDetails: {},
  // removeBoxId: null,
  // isRemoveBoxDisplayed: false,
  // form: {
  //   titleFr: '',
  //   titleDe: '',
  //   contentFr: '',
  //   contentDe: '',
  //   img64: '',
  // },
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

    // case DISPLAY_REMOVE_BOX:
    //   return {
    //     ...state,
    //     removeBoxId: action.pictureId,
    //     isRemoveBoxDisplayed: true,
    //   };

    // case HIDE_REMOVE_BOX:
    //   return {
    //     ...state,
    //     removeBoxId: null,
    //     isRemoveBoxDisplayed: false,
    //   };

    // case STORE_NEWS_DETAILS:
    //   return {
    //     ...state,
    //     pictureDetails: action.pictureDetails,
    //   };

    default:
      return state;
  }
};

export default pictureReducer;
