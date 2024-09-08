import { CHANGE_LOGIN_INPUT } from '../actions/loginActions';

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

    default:
      return state;
  }
};

export default loginReducer;
