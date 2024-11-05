import { LoginActionsEnum } from '../actionsIndex';
import {
  ChangeLoginInput,
  PostLoginForm,
  LoginSuccess,
  LoginFailure,
  Logout,
} from './loginActionTypes';

export const changeLoginInput = (
  value: string,
  identifier: 'usernameInput' | 'passwordInput',
): ChangeLoginInput => ({
  type: LoginActionsEnum.CHANGE_LOGIN_INPUT,
  value,
  identifier,
});

export const postLoginForm = (): PostLoginForm => ({
  type: LoginActionsEnum.POST_LOGIN_FORM,
});

export const loginSuccess = (
  loggedId: number,
  token: string,
): LoginSuccess => ({
  type: LoginActionsEnum.LOGIN_SUCCESS,
  loggedId,
  token,
});

export const loginFailure = (failureMessages: string[]): LoginFailure => ({
  type: LoginActionsEnum.LOGIN_FAILURE,
  failureMessages,
});

export const logout = (): Logout => ({
  type: LoginActionsEnum.LOGOUT,
});
