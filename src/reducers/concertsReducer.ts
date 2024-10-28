import {
  STORE_CONCERT_LIST,
  DISPLAY_REMOVE_BOX,
  HIDE_REMOVE_BOX,
  CHANGE_CONCERT_INPUT,
  CONCERT_FAILURE,
  STORE_CONCERT_DETAILS,
} from '../actions/concert/concertsActions';

export const initialState = {
  concertList: [],
  concertDetails: {},
  removeBoxId: null,
  isRemoveBoxDisplayed: false,
  form: {
    city: '',
    eventDate: '',
    venue: '',
    eventName: '',
    link: '',
  },
  failureMessages: [],
};

const concertsReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_CONCERT_LIST:
      return {
        ...state,
        concertList: action.concertList,
      };

    case DISPLAY_REMOVE_BOX:
      return {
        ...state,
        removeBoxId: action.concertId,
        isRemoveBoxDisplayed: true,
      };

    case HIDE_REMOVE_BOX:
      return {
        ...state,
        removeBoxId: null,
        isRemoveBoxDisplayed: false,
      };

    case CHANGE_CONCERT_INPUT:
      return {
        ...state,
        form: {
          ...state.form,
          [action.identifier]: action.value,
        },
      };

    case CONCERT_FAILURE:
      return {
        ...state,
        failureMessages: action.failureMessages,
      };

    case STORE_CONCERT_DETAILS:
      return {
        ...state,
        concertDetails: action.concertDetails,
      };

    default:
      return state;
  }
};

export default concertsReducer;
