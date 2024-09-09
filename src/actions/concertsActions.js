export const FETCH_CONCERTS = 'FETCH_CONCERTS';
export const STORE_CONCERTS = 'STORE_CONCERTS';
export const DISPLAY_REMOVE_BOX = 'DISPLAY_REMOVE_BOX';
export const HIDE_REMOVE_BOX = 'HIDE_REMOVE_BOX';

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
