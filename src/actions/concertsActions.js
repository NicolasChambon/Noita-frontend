export const FETCH_CONCERTS = 'FETCH_CONCERTS';
export const STORE_CONCERTS = 'STORE_CONCERTS';

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
