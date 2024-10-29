import { LoginActionsType } from '../actions/actionsIndex';

export const initialState = {
  usernameInput: '',
  passwordInput: '',
  isLogged: false,
  loggedId: null,
  token: '',
  failureMessages: [],
};

const loginReducer = (state = initialState, action = {}) => {
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
