import {
  STORE_PICTURE_LIST,
  // DISPLAY_REMOVE_BOX,
  // HIDE_REMOVE_BOX,
  // CHANGE_NEWS_INPUT,
  // NEWS_FAILURE,
  // STORE_NEWS_DETAILS,
} from '../actions/carouselActions';

export const initialState = {
  pictureList: [],
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
  // failureMessages: [],
};

const pictureReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_PICTURE_LIST:
      return {
        ...state,
        pictureList: action.pictureList,
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

    // case CHANGE_NEWS_INPUT:
    //   return {
    //     ...state,
    //     form: {
    //       ...state.form,
    //       [action.identifier]: action.value,
    //     },
    //   };

    // case NEWS_FAILURE:
    //   return {
    //     ...state,
    //     failureMessages: action.failureMessages,
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
