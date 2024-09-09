import { STORE_CONCERTS } from '../actions/concertsActions';

export const initialState = {
  concerts: [],
};

const concertsReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_CONCERTS:
      return {
        ...state,
        concerts: action.concerts,
      };
    default:
      return state;
  }
};

export default concertsReducer;
