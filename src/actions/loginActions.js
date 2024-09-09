export const CHANGE_LOGIN_INPUT = 'CHANGE_LOGIN_INPUT';
export const POST_LOGIN_FORM = 'POST_LOGIN_FORM';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const changeLoginInput = (value, identifier) => ({
  type: CHANGE_LOGIN_INPUT,
  value,
  identifier,
});

export const postLoginForm = (navigate) => ({
  type: POST_LOGIN_FORM,
  navigate,
});

export const loginSuccess = () => ({
  type: 'LOGIN_SUCCESS',
});

export const loginFailure = (failureMessages) => ({
  type: 'LOGIN_FAILURE',
  failureMessages,
});

export const logout = () => ({
  type: 'LOGOUT',
});
