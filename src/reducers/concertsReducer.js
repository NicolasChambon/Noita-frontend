import {
  STORE_CONCERTS,
  DISPLAY_REMOVE_BOX,
  HIDE_REMOVE_BOX,
  CHANGE_CONCERT_INPUT,
} from '../actions/concertsActions';

export const initialState = {
  concerts: [],
  removeBoxId: null,
  isRemoveBoxDisplayed: false,
  form: {
    city: '',
    eventDate: '',
    venue: '',
    eventName: '',
    link: '',
  },
};

const concertsReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_CONCERTS:
      return {
        ...state,
        concerts: action.concerts,
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

    default:
      return state;
  }
};

export default concertsReducer;
