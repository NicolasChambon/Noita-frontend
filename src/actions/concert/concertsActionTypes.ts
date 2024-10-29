import { ConcertActionsType } from '../actionsIndex';

export interface FetchConcertListReturn {
  type: typeof ConcertActionsType.FETCH_CONCERT_LIST;
}

// TODO: penser à déplacer ce type dans un fichier dédié
export interface Concert {
  id: number;
  city: string;
  event_date: string;
  venue: string;
  event_name: string;
  event_url: string;
  createdAt: string;
  updatedAt: string;
}

export interface StoreConcertListReturn {
  type: typeof ConcertActionsType.STORE_CONCERT_LIST;
  concertList: Concert[];
}

export interface DisplayRemoveBoxReturn {
  type: typeof ConcertActionsType.DISPLAY_REMOVE_BOX;
  concertId: number;
}

export interface HideRemoveBoxReturn {
  type: typeof ConcertActionsType.HIDE_REMOVE_BOX;
}

export interface ChangeConcertInputReturn {
  type: typeof ConcertActionsType.CHANGE_CONCERT_INPUT;
  value: string;
  identifier: 'city' | 'eventDate' | 'venue' | 'eventName' | 'link';
}

export interface PostAddConcertFormReturn {
  type: typeof ConcertActionsType.POST_ADD_CONCERT_FORM;
  navigate: () => void;
}

export interface PostEditConcertFormReturn {
  type: typeof ConcertActionsType.POST_EDIT_CONCERT_FORM;
  navigate: () => void;
}

export interface ConcertFailureReturn {
  type: typeof ConcertActionsType.CONCERT_FAILURE;
  failureMessages: string[];
}

export interface FetchConcertDetailsReturn {
  type: typeof ConcertActionsType.FETCH_CONCERT_DETAILS;
  concertId: number;
}

export interface StoreConcertDetailsReturn {
  type: typeof ConcertActionsType.STORE_CONCERT_DETAILS;
  concertDetails: Concert;
}

export interface DeleteConcertReturn {
  type: typeof ConcertActionsType.DELETE_CONCERT;
  concertId: number;
}

export type ConcertsActionTypes =
  | FetchConcertListReturn
  | StoreConcertListReturn
  | DisplayRemoveBoxReturn
  | HideRemoveBoxReturn
  | ChangeConcertInputReturn
  | PostAddConcertFormReturn
  | PostEditConcertFormReturn
  | ConcertFailureReturn
  | FetchConcertDetailsReturn
  | StoreConcertDetailsReturn
  | DeleteConcertReturn;
