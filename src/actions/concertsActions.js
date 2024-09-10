export const FETCH_CONCERTS = 'FETCH_CONCERTS';
export const STORE_CONCERTS = 'STORE_CONCERTS';
export const DISPLAY_REMOVE_BOX = 'DISPLAY_REMOVE_BOX';
export const HIDE_REMOVE_BOX = 'HIDE_REMOVE_BOX';
export const CHANGE_CONCERT_INPUT = 'CHANGE_CONCERT_INPUT';
export const POST_ADD_CONCERT_FORM = 'POST_ADD_CONCERT_FORM';
export const POST_EDIT_CONCERT_FORM = 'POST_EDIT_CONCERT_FORM';
export const CONCERT_FAILURE = 'CONCERT_FAILURE';

export const fetchConcerts = () => {
  return {
    type: FETCH_CONCERTS,
  };
};

export const storeConcerts = (concerts) => {
  return {
    type: STORE_CONCERTS,
    concerts,
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
