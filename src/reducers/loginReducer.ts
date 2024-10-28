import {
  CHANGE_LOGIN_INPUT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/login/loginActions';

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
    case CHANGE_LOGIN_INPUT:
      return {
        ...state,
        [action.identifier]: action.value,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        usernameInput: '',
        passwordInput: '',
        failureMessages: [],
        loggedId: action.loggedId,
        token: action.token,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        failureMessages: action.failureMessages,
      };

    case LOGOUT:
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
