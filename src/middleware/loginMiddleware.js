import { POST_LOGIN_FORM, loginSuccess } from '../actions/loginActions';

const loginMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case POST_LOGIN_FORM: {
      const logUser = async () => {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/admin/login`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                username: store.getState().login.usernameInput,
                password: store.getState().login.passwordInput,
              }),
            },
          );
          if (!response.ok) {
            const error = await response.json();
            throw new Error(error.errors);
          }
          const data = await response.json();
          localStorage.setItem('token', data.token);
          store.dispatch(loginSuccess());
        } catch (error) {
          console.error(error);
        }
      };
      logUser();
      break;
    }
    default:
  }
  return next(action);
};

export default loginMiddleware;
