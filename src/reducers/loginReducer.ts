import { LoginActionsEnum } from '../actions/actionsIndex';
import { LoginAction } from '../actions/login/loginActionTypes';

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
  action: LoginAction,
): LoginState => {
  switch (action.type) {
    case LoginActionsEnum.CHANGE_LOGIN_INPUT:
      return {
        ...state,
        [action.identifier]: action.value,
      };

    case LoginActionsEnum.LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        usernameInput: '',
        passwordInput: '',
        failureMessages: [],
        loggedId: action.loggedId,
        token: action.token,
      };

    case LoginActionsEnum.LOGIN_FAILURE:
      return {
        ...state,
        failureMessages: action.failureMessages,
      };

    case LoginActionsEnum.LOGOUT:
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
