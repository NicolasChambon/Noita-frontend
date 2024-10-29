import {
  CHANGE_LOGIN_INPUT,
  POST_LOGIN_FORM,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from './loginActionTypes';

export interface ChangeLoginInputReturn {
  type: typeof CHANGE_LOGIN_INPUT;
  value: string;
  identifier: 'usernameInput' | 'passwordInput';
}

export interface PostLoginFormReturn {
  type: typeof POST_LOGIN_FORM;
  navigate: () => void;
}

export interface LoginSuccessReturn {
  type: typeof LOGIN_SUCCESS;
  loggedId: number;
  token: string;
}

export interface LoginFailureReturn {
  type: typeof LOGIN_FAILURE;
  failureMessages: string[];
}

export interface LogoutReturn {
  type: typeof LOGOUT;
}

export type LoginAction =
  | ChangeLoginInputReturn
  | PostLoginFormReturn
  | LoginSuccessReturn
  | LoginFailureReturn
  | LogoutReturn;
