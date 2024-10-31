// Actions
import { loginSuccess, loginFailure } from '../actions/login/loginActions';

// Types
import { Dispatch } from 'redux';
import { AppStore } from '../store';
import { LoginActionsEnum } from '../actions/actionsIndex';
import { LoginAction } from '../actions/login/loginActionTypes';
import { ErrorResponse } from './middlewareTypes';

// Local types
interface LoginResponse {
  message: string;
  admin: {
    id: number;
    username: string;
  };
  token: string;
}

const loginMiddleware =
  (store: AppStore) =>
  (next: Dispatch<LoginAction>) =>
  async (action: LoginAction) => {
    switch (action.type) {
      case LoginActionsEnum.POST_LOGIN_FORM: {
        try {
          const response: Response = await fetch(
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
            const error: ErrorResponse = await response.json();
            store.dispatch(loginFailure(error.errors));
            throw new Error(error.errors.join(', '));
          }
          const data: LoginResponse = await response.json();
          store.dispatch(loginSuccess(data.admin.id, data.token));
        } catch (error: unknown) {
          console.error(error);
        }
        break;
      }
      default:
    }
    return next(action);
  };

export default loginMiddleware;
