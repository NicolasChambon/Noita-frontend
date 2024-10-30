import { LoginActionsEnum } from '../actionsIndex';

export interface ChangeLoginInput {
  type: typeof LoginActionsEnum.CHANGE_LOGIN_INPUT;
  value: string;
  identifier: 'usernameInput' | 'passwordInput';
}

export interface PostLoginForm {
  type: typeof LoginActionsEnum.POST_LOGIN_FORM;
  navigate: () => void;
}

export interface LoginSuccess {
  type: typeof LoginActionsEnum.LOGIN_SUCCESS;
  loggedId: number;
  token: string;
}

export interface LoginFailure {
  type: typeof LoginActionsEnum.LOGIN_FAILURE;
  failureMessages: string[];
}

export interface Logout {
  type: typeof LoginActionsEnum.LOGOUT;
}

export type LoginAction =
  | ChangeLoginInput
  | PostLoginForm
  | LoginSuccess
  | LoginFailure
  | Logout;
