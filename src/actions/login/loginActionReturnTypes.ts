import { LoginActionsType } from '../actionsIndex';

export interface ChangeLoginInputReturn {
  type: typeof LoginActionsType.CHANGE_LOGIN_INPUT;
  value: string;
  identifier: 'usernameInput' | 'passwordInput';
}

export interface PostLoginFormReturn {
  type: typeof LoginActionsType.POST_LOGIN_FORM;
  navigate: () => void;
}

export interface LoginSuccessReturn {
  type: typeof LoginActionsType.LOGIN_SUCCESS;
  loggedId: number;
  token: string;
}

export interface LoginFailureReturn {
  type: typeof LoginActionsType.LOGIN_FAILURE;
  failureMessages: string[];
}

export interface LogoutReturn {
  type: typeof LoginActionsType.LOGOUT;
}

export type LoginActionReturnTypes =
  | ChangeLoginInputReturn
  | PostLoginFormReturn
  | LoginSuccessReturn
  | LoginFailureReturn
  | LogoutReturn;
