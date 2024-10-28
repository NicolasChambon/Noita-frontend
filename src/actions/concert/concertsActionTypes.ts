import {
  FETCH_CONCERT_LIST,
  STORE_CONCERT_LIST,
  DISPLAY_REMOVE_BOX,
  HIDE_REMOVE_BOX,
  CHANGE_CONCERT_INPUT,
  POST_ADD_CONCERT_FORM,
  POST_EDIT_CONCERT_FORM,
  CONCERT_FAILURE,
  FETCH_CONCERT_DETAILS,
  STORE_CONCERT_DETAILS,
  DELETE_CONCERT,
} from './concertsActions';

export interface FetchConcertListReturn {
  type: typeof FETCH_CONCERT_LIST;
}

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
  type: typeof STORE_CONCERT_LIST;
  concertList: Concert[];
}

export interface DisplayRemoveBoxReturn {
  type: typeof DISPLAY_REMOVE_BOX;
  concertId: number;
}

export interface HideRemoveBoxReturn {
  type: typeof HIDE_REMOVE_BOX;
}

export interface ChangeConcertInputReturn {
  type: typeof CHANGE_CONCERT_INPUT;
  value: string;
  identifier: 'city' | 'eventDate' | 'venue' | 'eventName' | 'link';
}

export interface PostAddConcertFormReturn {
  type: typeof POST_ADD_CONCERT_FORM;
  navigate: () => void;
}

export interface PostEditConcertFormReturn {
  type: typeof POST_EDIT_CONCERT_FORM;
  navigate: () => void;
}

export interface ConcertFailureReturn {
  type: typeof CONCERT_FAILURE;
  failureMessages: string[];
}

export interface FetchConcertDetailsReturn {
  type: typeof FETCH_CONCERT_DETAILS;
  concertId: number;
}

export interface StoreConcertDetailsReturn {
  type: typeof STORE_CONCERT_DETAILS;
  concertDetails: Concert;
}

export interface DeleteConcertReturn {
  type: typeof DELETE_CONCERT;
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
