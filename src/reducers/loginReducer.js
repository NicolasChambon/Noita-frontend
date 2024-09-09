import {
  CHANGE_LOGIN_INPUT,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../actions/loginActions';

export const initialState = {
  usernameInput: '',
  passwordInput: '',
  isLogged: false,
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
