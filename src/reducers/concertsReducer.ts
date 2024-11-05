import { ConcertActionsEnum } from '../actions/actionsIndex';
import { Concert, ConcertAction } from '../actions/concert/concertsActionTypes';

// TODO à déplacer ?
export interface ConcertForm {
  city: string;
  eventDate: string;
  venue: string;
  eventName: string;
  link: string;
}

export interface ConcertState {
  concertList: Concert[];
  concertDetails: Concert | null;
  removeBoxId: number | null;
  isRemoveBoxDisplayed: boolean;
  form: ConcertForm;
  failureMessages: string[];
}

export const initialState: ConcertState = {
  concertList: [],
  concertDetails: null,
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

const concertsReducer = (
  state: ConcertState = initialState,
  action: ConcertAction,
): ConcertState => {
  switch (action.type) {
    case ConcertActionsEnum.STORE_CONCERT_LIST:
      return {
        ...state,
        concertList: action.concertList,
      };

    case ConcertActionsEnum.DISPLAY_REMOVE_BOX:
      return {
        ...state,
        removeBoxId: action.concertId,
        isRemoveBoxDisplayed: true,
      };

    case ConcertActionsEnum.HIDE_REMOVE_BOX:
      return {
        ...state,
        removeBoxId: null,
        isRemoveBoxDisplayed: false,
      };

    case ConcertActionsEnum.CHANGE_CONCERT_INPUT:
      return {
        ...state,
        form: {
          ...state.form,
          [action.identifier]: action.value,
        },
      };

    case ConcertActionsEnum.CONCERT_FAILURE:
      return {
        ...state,
        failureMessages: action.failureMessages,
      };

    case ConcertActionsEnum.STORE_CONCERT_DETAILS:
      return {
        ...state,
        concertDetails: action.concertDetails,
      };

    default:
      return state;
  }
};

export default concertsReducer;
