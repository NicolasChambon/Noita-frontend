import { ConcertActionsType } from '../actionsIndex';
import {
  FetchConcertListReturn,
  Concert,
  StoreConcertListReturn,
  DisplayRemoveBoxReturn,
  HideRemoveBoxReturn,
  ChangeConcertInputReturn,
  PostAddConcertFormReturn,
  PostEditConcertFormReturn,
  ConcertFailureReturn,
  FetchConcertDetailsReturn,
  StoreConcertDetailsReturn,
  DeleteConcertReturn,
} from './concertsActionTypes';

export const fetchConcertList = (): FetchConcertListReturn => {
  return {
    type: ConcertActionsType.FETCH_CONCERT_LIST,
  };
};

export const storeConcertList = (
  concertList: Concert[],
): StoreConcertListReturn => {
  return {
    type: ConcertActionsType.STORE_CONCERT_LIST,
    concertList,
  };
};

export const displayRemoveBox = (concertId: number): DisplayRemoveBoxReturn => {
  return {
    type: ConcertActionsType.DISPLAY_REMOVE_BOX,
    concertId,
  };
};

export const hideRemoveBox = (): HideRemoveBoxReturn => {
  return {
    type: ConcertActionsType.HIDE_REMOVE_BOX,
  };
};

export const changeConcertInput = (
  value: string,
  identifier: 'city' | 'eventDate' | 'venue' | 'eventName' | 'link',
): ChangeConcertInputReturn => {
  return {
    type: ConcertActionsType.CHANGE_CONCERT_INPUT,
    value,
    identifier,
  };
};

export const postAddConcertForm = (
  navigate: () => void,
): PostAddConcertFormReturn => {
  return {
    type: ConcertActionsType.POST_ADD_CONCERT_FORM,
    navigate,
  };
};

export const postEditConcertForm = (
  navigate: () => void,
): PostEditConcertFormReturn => {
  return {
    type: ConcertActionsType.POST_EDIT_CONCERT_FORM,
    navigate,
  };
};

export const concertFailure = (
  failureMessages: string[],
): ConcertFailureReturn => {
  return {
    type: ConcertActionsType.CONCERT_FAILURE,
    failureMessages,
  };
};

export const fetchConcertDetails = (
  concertId: number,
): FetchConcertDetailsReturn => {
  return {
    type: ConcertActionsType.FETCH_CONCERT_DETAILS,
    concertId,
  };
};

export const storeConcertDetails = (
  concertDetails: Concert,
): StoreConcertDetailsReturn => {
  return {
    type: ConcertActionsType.STORE_CONCERT_DETAILS,
    concertDetails,
  };
};

export const deleteConcert = (concertId: number): DeleteConcertReturn => {
  return {
    type: ConcertActionsType.DELETE_CONCERT,
    concertId,
  };
};
