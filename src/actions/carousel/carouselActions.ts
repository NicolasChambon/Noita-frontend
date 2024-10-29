import { CarouselActionsType } from '../actionsIndex';
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
} from './carouselActionReturnTypes';

export const fetchCarouselPictures = (): FetchCarouselPicturesReturn => {
  return {
    type: CarouselActionsType.FETCH_CAROUSEL_PICTURES,
  };
};

export const storePictureList = (
  pictureList: Picture[],
): StorePictureListReturn => {
  return {
    type: CarouselActionsType.STORE_PICTURE_LIST,
    pictureList,
  };
};

export const changePictureInput = (
  value: string,
  identifier: 'img64',
): ChangePictureInputReturn => {
  return {
    type: CarouselActionsType.CHANGE_PICTURE_INPUT,
    value,
    identifier,
  };
};

export const addPicture = (): AddPictureReturn => {
  return {
    type: CarouselActionsType.ADD_PICTURE,
  };
};

export const carouselFailure = (
  failureMessages: string[],
): CarouselFailureReturn => {
  return {
    type: CarouselActionsType.CAROUSEL_FAILURE,
    failureMessages,
  };
};

export const displayRemoveBox = (pictureId: number): DisplayRemoveBoxReturn => {
  return {
    type: CarouselActionsType.DISPLAY_REMOVE_BOX,
    pictureId,
  };
};

export const hideRemoveBox = (): HideRemoveBoxReturn => {
  return {
    type: CarouselActionsType.HIDE_REMOVE_BOX,
  };
};

export const deletePicture = (pictureId: number): DeletePictureReturn => {
  return {
    type: CarouselActionsType.DELETE_PICTURE,
    pictureId,
  };
};

export const updatePicture = (pictureId: number): UpdatePictureReturn => {
  return {
    type: CarouselActionsType.UPDATE_PICTURE,
    pictureId,
  };
};

export const changePosition = (
  pictureId: number,
  direction: 'left' | 'right',
): ChangePositionReturn => {
  return {
    type: CarouselActionsType.CHANGE_POSITION,
    pictureId,
    direction,
  };
};
