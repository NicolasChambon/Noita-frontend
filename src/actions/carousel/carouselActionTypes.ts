import {
  FETCH_CAROUSEL_PICTURES,
  STORE_PICTURE_LIST,
  CHANGE_PICTURE_INPUT,
  ADD_PICTURE,
  CAROUSEL_FAILURE,
  DISPLAY_REMOVE_BOX,
  HIDE_REMOVE_BOX,
  DELETE_PICTURE,
  UPDATE_PICTURE,
  CHANGE_POSITION,
} from './carouselActions';

export interface FetchCarouselPicturesReturn {
  type: typeof FETCH_CAROUSEL_PICTURES;
}

export interface Picture {
  id: number;
  url: string;
  position: number;
  createdAt: string;
  updatedAt: string;
}

export interface StorePictureListReturn {
  type: typeof STORE_PICTURE_LIST;
  pictureList: Picture[];
}

export interface ChangePictureInputReturn {
  type: typeof CHANGE_PICTURE_INPUT;
  value: string;
  identifier: 'img64'; // 'img64' is the only possible value for identifier in the case of carousel
}

export interface AddPictureReturn {
  type: typeof ADD_PICTURE;
}

export interface CarouselFailureReturn {
  type: typeof CAROUSEL_FAILURE;
  failureMessages: string[];
}

export interface DisplayRemoveBoxReturn {
  type: typeof DISPLAY_REMOVE_BOX;
  pictureId: number;
}

export interface HideRemoveBoxReturn {
  type: typeof HIDE_REMOVE_BOX;
}

export interface DeletePictureReturn {
  type: typeof DELETE_PICTURE;
  pictureId: number;
}

export interface UpdatePictureReturn {
  type: typeof UPDATE_PICTURE;
  pictureId: number;
}

export interface ChangePositionReturn {
  type: typeof CHANGE_POSITION;
  pictureId: number;
  direction: 'left' | 'right';
}

export type CarouselAction =
  | FetchCarouselPicturesReturn
  | StorePictureListReturn
  | ChangePictureInputReturn
  | AddPictureReturn
  | CarouselFailureReturn
  | DisplayRemoveBoxReturn
  | HideRemoveBoxReturn
  | DeletePictureReturn
  | UpdatePictureReturn
  | ChangePositionReturn;
