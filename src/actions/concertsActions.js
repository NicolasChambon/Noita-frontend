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

export const fetchConcertList = () => {
  return {
    type: FETCH_CONCERT_LIST,
  };
};

export const storeConcertList = (concertList) => {
  return {
    type: STORE_CONCERT_LIST,
    concertList,
  };
};

export const displayRemoveBox = (concertId) => {
  return {
    type: DISPLAY_REMOVE_BOX,
    concertId,
  };
};

export const hideRemoveBox = () => {
  return {
    type: HIDE_REMOVE_BOX,
  };
};

export const changeConcertInput = (value, identifier) => {
  return {
    type: CHANGE_CONCERT_INPUT,
    value,
    identifier,
  };
};

export const postAddConcertForm = (navigate) => {
  return {
    type: POST_ADD_CONCERT_FORM,
    navigate,
  };
};

export const postEditConcertForm = (navigate) => {
  return {
    type: POST_EDIT_CONCERT_FORM,
    navigate,
  };
};

export const concertFailure = (failureMessages) => {
  return {
    type: 'CONCERT_FAILURE',
    failureMessages,
  };
};

export const fetchConcertDetails = (concertId) => {
  return {
    type: FETCH_CONCERT_DETAILS,
    concertId,
  };
};

export const storeConcertDetails = (concertDetails) => {
  return {
    type: STORE_CONCERT_DETAILS,
    concertDetails,
  };
};

export const deleteConcert = (concertId) => {
  return {
    type: DELETE_CONCERT,
    concertId,
  };
};
