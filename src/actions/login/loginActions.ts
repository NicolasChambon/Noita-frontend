import { LoginActionsType } from '../actionsIndex';
import {
  ChangeLoginInputReturn,
  PostLoginFormReturn,
  LoginSuccessReturn,
  LoginFailureReturn,
  LogoutReturn,
} from './loginActionReturnTypes';

export const changeLoginInput = (
  value: string,
  identifier: 'usernameInput' | 'passwordInput',
): ChangeLoginInputReturn => ({
  type: LoginActionsType.CHANGE_LOGIN_INPUT,
  value,
  identifier,
});

export const postLoginForm = (navigate: () => void): PostLoginFormReturn => ({
  type: LoginActionsType.POST_LOGIN_FORM,
  navigate,
});

export const loginSuccess = (
  loggedId: number,
  token: string,
): LoginSuccessReturn => ({
  type: LoginActionsType.LOGIN_SUCCESS,
  loggedId,
  token,
});

export const loginFailure = (
  failureMessages: string[],
): LoginFailureReturn => ({
  type: LoginActionsType.LOGIN_FAILURE,
  failureMessages,
});

export const logout = (): LogoutReturn => ({
  type: LoginActionsType.LOGOUT,
});
