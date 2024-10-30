import { CarouselActionsEnum } from '../actionsIndex';
import {
  FetchCarouselPictures,
  Picture,
  StorePictureList,
  ChangePictureInput,
  AddPicture,
  CarouselFailure,
  DisplayRemoveBox,
  HideRemoveBox,
  DeletePicture,
  UpdatePicture,
  ChangePosition,
} from './carouselActionTypes';

export const fetchCarouselPictures = (): FetchCarouselPictures => {
  return {
    type: CarouselActionsEnum.FETCH_CAROUSEL_PICTURES,
  };
};

export const storePictureList = (pictureList: Picture[]): StorePictureList => {
  return {
    type: CarouselActionsEnum.STORE_PICTURE_LIST,
    pictureList,
  };
};

export const changePictureInput = (
  value: string,
  identifier: 'img64',
): ChangePictureInput => {
  return {
    type: CarouselActionsEnum.CHANGE_PICTURE_INPUT,
    value,
    identifier,
  };
};

export const addPicture = (): AddPicture => {
  return {
    type: CarouselActionsEnum.ADD_PICTURE,
  };
};

export const carouselFailure = (failureMessages: string[]): CarouselFailure => {
  return {
    type: CarouselActionsEnum.CAROUSEL_FAILURE,
    failureMessages,
  };
};

export const displayRemoveBox = (pictureId: number): DisplayRemoveBox => {
  return {
    type: CarouselActionsEnum.DISPLAY_REMOVE_BOX,
    pictureId,
  };
};

export const hideRemoveBox = (): HideRemoveBox => {
  return {
    type: CarouselActionsEnum.HIDE_REMOVE_BOX,
  };
};

export const deletePicture = (pictureId: number): DeletePicture => {
  return {
    type: CarouselActionsEnum.DELETE_PICTURE,
    pictureId,
  };
};

export const updatePicture = (pictureId: number): UpdatePicture => {
  return {
    type: CarouselActionsEnum.UPDATE_PICTURE,
    pictureId,
  };
};

export const changePosition = (
  pictureId: number,
  direction: 'left' | 'right',
): ChangePosition => {
  return {
    type: CarouselActionsEnum.CHANGE_POSITION,
    pictureId,
    direction,
  };
};
