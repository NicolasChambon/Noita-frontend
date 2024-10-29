import { ConcertActionsType } from '../actions/actionsIndex';

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
    case ConcertActionsType.STORE_CONCERT_LIST:
      return {
        ...state,
        concertList: action.concertList,
      };

    case ConcertActionsType.DISPLAY_REMOVE_BOX:
      return {
        ...state,
        removeBoxId: action.concertId,
        isRemoveBoxDisplayed: true,
      };

    case ConcertActionsType.HIDE_REMOVE_BOX:
      return {
        ...state,
        removeBoxId: null,
        isRemoveBoxDisplayed: false,
      };

    case ConcertActionsType.CHANGE_CONCERT_INPUT:
      return {
        ...state,
        form: {
          ...state.form,
          [action.identifier]: action.value,
        },
      };

    case ConcertActionsType.CONCERT_FAILURE:
      return {
        ...state,
        failureMessages: action.failureMessages,
      };

    case ConcertActionsType.STORE_CONCERT_DETAILS:
      return {
        ...state,
        concertDetails: action.concertDetails,
      };

    default:
      return state;
  }
};

export default concertsReducer;
