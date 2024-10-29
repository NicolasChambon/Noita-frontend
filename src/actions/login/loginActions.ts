import {
  ChangeLoginInputReturn,
  PostLoginFormReturn,
  LoginSuccessReturn,
  LoginFailureReturn,
  LogoutReturn,
} from './loginActionTypes';

export const CHANGE_LOGIN_INPUT = 'CHANGE_LOGIN_INPUT';
export const POST_LOGIN_FORM = 'POST_LOGIN_FORM';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const changeLoginInput = (
  value: string,
  identifier: 'usernameInput' | 'passwordInput',
): ChangeLoginInputReturn => ({
  type: CHANGE_LOGIN_INPUT,
  value,
  identifier,
});

export const postLoginForm = (navigate: () => void): PostLoginFormReturn => ({
  type: POST_LOGIN_FORM,
  navigate,
});

export const loginSuccess = (
  loggedId: number,
  token: string,
): LoginSuccessReturn => ({
  type: LOGIN_SUCCESS,
  loggedId,
  token,
});

export const loginFailure = (
  failureMessages: string[],
): LoginFailureReturn => ({
  type: LOGIN_FAILURE,
  failureMessages,
});

export const logout = (): LogoutReturn => ({
  type: LOGOUT,
});
