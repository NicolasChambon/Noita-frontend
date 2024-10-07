export const FETCH_CAROUSEL_PICTURES = 'FETCH_CAROUSEL_PICTURES';
export const STORE_PICTURE_LIST = 'STORE_PICTURE_LIST';
export const CHANGE_PICTURE_INPUT = 'CHANGE_PICTURE_INPUT';
export const ADD_PICTURE = 'ADD_PICTURE';
export const CAROUSEL_FAILURE = 'CAROUSEL_FAILURE';
export const DISPLAY_REMOVE_BOX = 'DISPLAY_REMOVE_BOX';
export const HIDE_REMOVE_BOX = 'HIDE_REMOVE_BOX';
export const DELETE_PICTURE = 'DELETE_PICTURE';
export const UPDATE_PICTURE = 'UPDATE_PICTURE';
export const CHANGE_POSITION = 'CHANGE_POSITION';

export const fetchCarouselPictures = () => {
  return {
    type: FETCH_CAROUSEL_PICTURES,
  };
};

export const storePictureList = (pictureList) => {
  return {
    type: STORE_PICTURE_LIST,
    pictureList,
  };
};

export const changePictureInput = (value, identifier) => {
  return {
    type: CHANGE_PICTURE_INPUT,
    value,
    identifier,
  };
};

export const addPicture = () => {
  return {
    type: ADD_PICTURE,
  };
};

export const carouselFailure = (failureMessages) => {
  return {
    type: 'CAROUSEL_FAILURE',
    failureMessages,
  };
};

export const displayRemoveBox = (pictureId) => {
  return {
    type: DISPLAY_REMOVE_BOX,
    pictureId,
  };
};

export const hideRemoveBox = () => {
  return {
    type: HIDE_REMOVE_BOX,
  };
};

export const deletePicture = (pictureId) => {
  return {
    type: DELETE_PICTURE,
    pictureId,
  };
};

export const updatePicture = (pictureId) => {
  return {
    type: 'UPDATE_PICTURE',
    pictureId,
  };
};

export const changePosition = (pictureId, direction) => {
  return {
    type: CHANGE_POSITION,
    pictureId,
    direction,
  };
};
