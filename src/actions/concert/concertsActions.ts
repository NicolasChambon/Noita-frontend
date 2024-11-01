import { ConcertActionsEnum } from '../actionsIndex';
import {
  FetchConcertList,
  Concert,
  StoreConcertList,
  DisplayRemoveBox,
  HideRemoveBox,
  ChangeConcertInput,
  PostAddConcertForm,
  PostEditConcertForm,
  ConcertFailure,
  FetchConcertDetails,
  StoreConcertDetails,
  DeleteConcert,
} from './concertsActionTypes';
import { NavigateFunction } from 'react-router';

export const fetchConcertList = (): FetchConcertList => {
  return {
    type: ConcertActionsEnum.FETCH_CONCERT_LIST,
  };
};

export const storeConcertList = (concertList: Concert[]): StoreConcertList => {
  return {
    type: ConcertActionsEnum.STORE_CONCERT_LIST,
    concertList,
  };
};

export const displayRemoveBox = (concertId: number): DisplayRemoveBox => {
  return {
    type: ConcertActionsEnum.DISPLAY_REMOVE_BOX,
    concertId,
  };
};

export const hideRemoveBox = (): HideRemoveBox => {
  return {
    type: ConcertActionsEnum.HIDE_REMOVE_BOX,
  };
};

export const changeConcertInput = (
  value: string,
  identifier: 'city' | 'eventDate' | 'venue' | 'eventName' | 'link',
): ChangeConcertInput => {
  return {
    type: ConcertActionsEnum.CHANGE_CONCERT_INPUT,
    value,
    identifier,
  };
};

export const postAddConcertForm = (
  navigate: NavigateFunction,
): PostAddConcertForm => {
  return {
    type: ConcertActionsEnum.POST_ADD_CONCERT_FORM,
    navigate,
  };
};

export const postEditConcertForm = (
  navigate: NavigateFunction,
): PostEditConcertForm => {
  return {
    type: ConcertActionsEnum.POST_EDIT_CONCERT_FORM,
    navigate,
  };
};

export const concertFailure = (failureMessages: string[]): ConcertFailure => {
  return {
    type: ConcertActionsEnum.CONCERT_FAILURE,
    failureMessages,
  };
};

export const fetchConcertDetails = (concertId: number): FetchConcertDetails => {
  return {
    type: ConcertActionsEnum.FETCH_CONCERT_DETAILS,
    concertId,
  };
};

export const storeConcertDetails = (
  concertDetails: Concert,
): StoreConcertDetails => {
  return {
    type: ConcertActionsEnum.STORE_CONCERT_DETAILS,
    concertDetails,
  };
};

export const deleteConcert = (concertId: number): DeleteConcert => {
  return {
    type: ConcertActionsEnum.DELETE_CONCERT,
    concertId,
  };
};
