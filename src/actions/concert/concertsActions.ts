import {
  FetchConcertListReturn,
  Concert,
  StoreConcertListReturn,
  DisplayRemoveBoxReturn,
  HideRemoveBoxReturn,
  ChangeConcertInputReturn,
  PostAddConcertFormReturn,
  PostEditConcertFormReturn,
  ConcertFailureReturn,
  FetchConcertDetailsReturn,
  StoreConcertDetailsReturn,
  DeleteConcertReturn,
} from './concertsActionTypes';

export const FETCH_CONCERT_LIST = 'FETCH_CONCERT_LIST';
export const STORE_CONCERT_LIST = 'STORE_CONCERT_LIST';
export const DISPLAY_REMOVE_BOX = 'DISPLAY_REMOVE_BOX';
export const HIDE_REMOVE_BOX = 'HIDE_REMOVE_BOX';
export const CHANGE_CONCERT_INPUT = 'CHANGE_CONCERT_INPUT';
export const POST_ADD_CONCERT_FORM = 'POST_ADD_CONCERT_FORM';
export const POST_EDIT_CONCERT_FORM = 'POST_EDIT_CONCERT_FORM';
export const CONCERT_FAILURE = 'CONCERT_FAILURE';
export const FETCH_CONCERT_DETAILS = 'FETCH_CONCERT_DETAILS';
export const STORE_CONCERT_DETAILS = 'STORE_CONCERT_DETAILS';
export const DELETE_CONCERT = 'DELETE_CONCERT';

export const fetchConcertList = (): FetchConcertListReturn => {
  return {
    type: FETCH_CONCERT_LIST,
  };
};

export const storeConcertList = (
  concertList: Concert[],
): StoreConcertListReturn => {
  return {
    type: STORE_CONCERT_LIST,
    concertList,
  };
};

export const displayRemoveBox = (concertId: number): DisplayRemoveBoxReturn => {
  return {
    type: DISPLAY_REMOVE_BOX,
    concertId,
  };
};

export const hideRemoveBox = (): HideRemoveBoxReturn => {
  return {
    type: HIDE_REMOVE_BOX,
  };
};

export const changeConcertInput = (
  value: string,
  identifier: 'city' | 'eventDate' | 'venue' | 'eventName' | 'link',
): ChangeConcertInputReturn => {
  return {
    type: CHANGE_CONCERT_INPUT,
    value,
    identifier,
  };
};

export const postAddConcertForm = (
  navigate: () => void,
): PostAddConcertFormReturn => {
  return {
    type: POST_ADD_CONCERT_FORM,
    navigate,
  };
};

export const postEditConcertForm = (
  navigate: () => void,
): PostEditConcertFormReturn => {
  return {
    type: POST_EDIT_CONCERT_FORM,
    navigate,
  };
};

export const concertFailure = (
  failureMessages: string[],
): ConcertFailureReturn => {
  return {
    type: CONCERT_FAILURE,
    failureMessages,
  };
};

export const fetchConcertDetails = (
  concertId: number,
): FetchConcertDetailsReturn => {
  return {
    type: FETCH_CONCERT_DETAILS,
    concertId,
  };
};

export const storeConcertDetails = (
  concertDetails: Concert,
): StoreConcertDetailsReturn => {
  return {
    type: STORE_CONCERT_DETAILS,
    concertDetails,
  };
};

export const deleteConcert = (concertId: number): DeleteConcertReturn => {
  return {
    type: DELETE_CONCERT,
    concertId,
  };
};
