import { CarouselActionsType } from '../actionsIndex';

export interface FetchCarouselPicturesReturn {
  type: typeof CarouselActionsType.FETCH_CAROUSEL_PICTURES;
}

// TODO Voir si on peut mettre ça dans un fichier types.ts
export interface Picture {
  id: number;
  url: string;
  position: number;
  createdAt: string;
  updatedAt: string;
}

export interface StorePictureListReturn {
  type: typeof CarouselActionsType.STORE_PICTURE_LIST;
  pictureList: Picture[];
}

export interface ChangePictureInputReturn {
  type: typeof CarouselActionsType.CHANGE_PICTURE_INPUT;
  value: string;
  identifier: 'img64'; // 'img64' is the only possible value for identifier in the case of carousel
}

export interface AddPictureReturn {
  type: typeof CarouselActionsType.ADD_PICTURE;
}

export interface CarouselFailureReturn {
  type: typeof CarouselActionsType.CAROUSEL_FAILURE;
  failureMessages: string[];
}

export interface DisplayRemoveBoxReturn {
  type: typeof CarouselActionsType.DISPLAY_REMOVE_BOX;
  pictureId: number;
}

export interface HideRemoveBoxReturn {
  type: typeof CarouselActionsType.HIDE_REMOVE_BOX;
}

export interface DeletePictureReturn {
  type: typeof CarouselActionsType.DELETE_PICTURE;
  pictureId: number;
}

export interface UpdatePictureReturn {
  type: typeof CarouselActionsType.UPDATE_PICTURE;
  pictureId: number;
}

export interface ChangePositionReturn {
  type: typeof CarouselActionsType.CHANGE_POSITION;
  pictureId: number;
  direction: 'left' | 'right';
}

export type CarouselActionTypes =
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
