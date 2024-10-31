import { ConcertActionsEnum } from '../actions/actionsIndex';
import {
  storeConcertList,
  concertFailure,
  storeConcertDetails,
  fetchConcertList,
} from '../actions/concert/concertsActions';
import { logout, loginFailure } from '../actions/login/loginActions';

const concertsMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case ConcertActionsEnum.FETCH_CONCERT_LIST: {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/concerts`,
        );

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.errors.join(', '));
        }
        const data = await response.json();
        store.dispatch(storeConcertList(data));
      } catch (error) {
        console.error(error);
      }
      break;
    }

    case ConcertActionsEnum.FETCH_CONCERT_DETAILS: {
      try {
        const user_id = store.getState().login.loggedId;
        const token = store.getState().login.token;
        const concert_id = action.concertId;

        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/concerts/${concert_id}?user_id=${user_id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (!response.ok) {
          const error = await response.json();
          if (error.status === 401) {
            store.dispatch(logout());
            store.dispatch(
              loginFailure(['The session has expired, please log in again.']),
            );
          }
          throw new Error(error.errors.join(', '));
        }
        const data = await response.json();
        store.dispatch(storeConcertDetails(data));
      } catch (error) {
        console.error(error);
      }
      break;
    }

    case ConcertActionsEnum.POST_ADD_CONCERT_FORM: {
      try {
        const user_id = store.getState().login.loggedId;
        const token = store.getState().login.token;
        const form = store.getState().concerts.form;

        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/concerts?user_id=${user_id}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(form),
          },
        );
        if (!response.ok) {
          const error = await response.json();
          if (error.status === 401) {
            store.dispatch(logout());
            store.dispatch(
              loginFailure(['The session has expired, please log in again.']),
            );
            throw new Error(error.errors.join(', '));
          }
          store.dispatch(concertFailure(error.errors));
          throw new Error(error.errors.join(', '));
        }
        action.navigate('/admin/concerts');
      } catch (error) {
        console.error(error);
      }
      break;
    }

    case ConcertActionsEnum.POST_EDIT_CONCERT_FORM: {
      try {
        const user_id = store.getState().login.loggedId;
        const token = store.getState().login.token;
        const form = store.getState().concerts.form;
        const concert_id = store.getState().concerts.concertDetails.id;

        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/concerts/${concert_id}?user_id=${user_id}`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(form),
          },
        );
        if (!response.ok) {
          const error = await response.json();
          if (error.status === 401) {
            store.dispatch(logout());
            store.dispatch(
              loginFailure(['The session has expired, please log in again.']),
            );
            throw new Error(error.errors.join(', '));
          }
          store.dispatch(concertFailure(error.errors));
          throw new Error(error.errors.join(', '));
        }
        action.navigate('/admin/concerts');
      } catch (error) {
        console.error(error);
      }
      break;
    }

    case ConcertActionsEnum.DELETE_CONCERT: {
      try {
        const user_id = store.getState().login.loggedId;
        const token = store.getState().login.token;
        const concert_id = action.concertId;

        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/concerts/${concert_id}?user_id=${user_id}`,
          {
            method: 'DELETE',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        if (!response.ok) {
          const error = await response.json();
          if (error.status === 401) {
            store.dispatch(logout());
            store.dispatch(
              loginFailure(['The session has expired, please log in again.']),
            );
            throw new Error(error.errors.join(', '));
          }
          store.dispatch(concertFailure(error.errors));
          throw new Error(error.errors.join(', '));
        }
        store.dispatch(fetchConcertList());
      } catch (error) {
        console.error(error);
      }
      break;
    }

    default:
  }
  return next(action);
};

export default concertsMiddleware;
