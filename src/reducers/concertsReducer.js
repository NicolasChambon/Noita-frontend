import {
  STORE_CONCERTS,
  DISPLAY_REMOVE_BOX,
  HIDE_REMOVE_BOX,
} from '../actions/concertsActions';

export const initialState = {
  concerts: [],
  removeBoxId: null,
  isRemoveBoxDisplayed: false,
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

    default:
      return state;
  }
};

export default concertsReducer;
