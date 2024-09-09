import {
  CHANGE_LOGIN_INPUT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/loginActions';

export const initialState = {
  usernameInput: '',
  passwordInput: '',
  isLogged: false,
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
      };

    default:
      return state;
  }
};

export default loginReducer;
