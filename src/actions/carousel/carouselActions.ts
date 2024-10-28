import {
  FetchCarouselPicturesReturn,
  Picture,
  StorePictureListReturn,
  ChangePictureInputReturn,
  AddPictureReturn,
  CarouselFailureReturn,
  DisplayRemoveBoxReturn,
  HideRemoveBoxReturn,
  DeletePictureReturn,
  UpdatePictureReturn,
  ChangePositionReturn,
} from './carouselActionTypes';

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

export const fetchCarouselPictures = (): FetchCarouselPicturesReturn => {
  return {
    type: FETCH_CAROUSEL_PICTURES,
  };
};

export const storePictureList = (
  pictureList: Picture[],
): StorePictureListReturn => {
  return {
    type: STORE_PICTURE_LIST,
    pictureList,
  };
};

export const changePictureInput = (
  value: string,
  identifier: 'img64',
): ChangePictureInputReturn => {
  return {
    type: CHANGE_PICTURE_INPUT,
    value,
    identifier,
  };
};

export const addPicture = (): AddPictureReturn => {
  return {
    type: ADD_PICTURE,
  };
};

export const carouselFailure = (
  failureMessages: string[],
): CarouselFailureReturn => {
  return {
    type: CAROUSEL_FAILURE,
    failureMessages,
  };
};

export const displayRemoveBox = (pictureId: number): DisplayRemoveBoxReturn => {
  return {
    type: DISPLAY_REMOVE_BOX,
    pictureId,
  };
};

export const hideRemoveBox = (): HideRemoveBoxReturn => {
  return {
    type: HIDE_REMOVE_BOX,
  };
};

export const deletePicture = (pictureId: number): DeletePictureReturn => {
  return {
    type: DELETE_PICTURE,
    pictureId,
  };
};

export const updatePicture = (pictureId: number): UpdatePictureReturn => {
  return {
    type: UPDATE_PICTURE,
    pictureId,
  };
};

export const changePosition = (
  pictureId: number,
  direction: 'left' | 'right',
): ChangePositionReturn => {
  return {
    type: CHANGE_POSITION,
    pictureId,
    direction,
  };
};
