import { CHANGE_LOGIN_INPUT, LOGIN_SUCCESS } from '../actions/loginActions';

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

    default:
      return state;
  }
};

export default loginReducer;
