import { CarouselActionsEnum } from '../actionsIndex';

export interface FetchCarouselPictures {
  type: typeof CarouselActionsEnum.FETCH_CAROUSEL_PICTURES;
}

// TODO Voir si on peut mettre ça dans un fichier types.ts
export interface Picture {
  id: number;
  url: string;
  position: number;
  createdAt: string;
  updatedAt: string;
}

export interface StorePictureList {
  type: typeof CarouselActionsEnum.STORE_PICTURE_LIST;
  pictureList: Picture[];
}

export interface ChangePictureInput {
  type: typeof CarouselActionsEnum.CHANGE_PICTURE_INPUT;
  value: string;
  identifier: 'img64'; // 'img64' is the only possible value for identifier in the case of carousel
}

export interface AddPicture {
  type: typeof CarouselActionsEnum.ADD_PICTURE;
}

export interface CarouselFailure {
  type: typeof CarouselActionsEnum.CAROUSEL_FAILURE;
  failureMessages: string[];
}

export interface DisplayRemoveBox {
  type: typeof CarouselActionsEnum.DISPLAY_REMOVE_BOX;
  pictureId: number;
}

export interface HideRemoveBox {
  type: typeof CarouselActionsEnum.HIDE_REMOVE_BOX;
}

export interface DeletePicture {
  type: typeof CarouselActionsEnum.DELETE_PICTURE;
  pictureId: number;
}

export interface UpdatePicture {
  type: typeof CarouselActionsEnum.UPDATE_PICTURE;
  pictureId: number;
}

export interface ChangePosition {
  type: typeof CarouselActionsEnum.CHANGE_POSITION;
  pictureId: number;
  direction: 'left' | 'right';
}

export type CarouselAction =
  | FetchCarouselPictures
  | StorePictureList
  | ChangePictureInput
  | AddPicture
  | CarouselFailure
  | DisplayRemoveBox
  | HideRemoveBox
  | DeletePicture
  | UpdatePicture
  | ChangePosition;
