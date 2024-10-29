import { LoginActionsType } from '../actions/actionsIndex';
import { LoginActionReturnTypes } from '../actions/login/loginActionReturnTypes';

export interface LoginState {
  usernameInput: string;
  passwordInput: string;
  isLogged: boolean;
  loggedId: number | null;
  token: string;
  failureMessages: string[];
}

export const initialState: LoginState = {
  usernameInput: '',
  passwordInput: '',
  isLogged: false,
  loggedId: null,
  token: '',
  failureMessages: [],
};

const loginReducer = (
  state: LoginState = initialState,
  action: LoginActionReturnTypes,
): LoginState => {
  switch (action.type) {
    case LoginActionsType.CHANGE_LOGIN_INPUT:
      return {
        ...state,
        [action.identifier]: action.value,
      };

    case LoginActionsType.LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        usernameInput: '',
        passwordInput: '',
        failureMessages: [],
        loggedId: action.loggedId,
        token: action.token,
      };

    case LoginActionsType.LOGIN_FAILURE:
      return {
        ...state,
        failureMessages: action.failureMessages,
      };

    case LoginActionsType.LOGOUT:
      return {
        ...state,
        isLogged: false,
        loggedId: null,
        token: '',
      };

    default:
      return state;
  }
};

export default loginReducer;
