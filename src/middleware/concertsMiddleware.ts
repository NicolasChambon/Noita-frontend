import { ConcertActionsType } from '../actions/actionsIndex';
import {
  storeConcertList,
  concertFailure,
  storeConcertDetails,
  fetchConcertList,
} from '../actions/concert/concertsActions';
import { logout, loginFailure } from '../actions/login/loginActions';

const concertsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case ConcertActionsType.FETCH_CONCERT_LIST: {
      (async () => {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/concerts`,
          );

          if (!response.ok) {
            const error = await response.json();
            throw new Error(error.errors);
          }
          const data = await response.json();
          store.dispatch(storeConcertList(data));
        } catch (error) {
          console.error(error);
        }
      })();
      break;
    }

    case ConcertActionsType.FETCH_CONCERT_DETAILS: {
      (async () => {
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
            throw new Error(error.errors);
          }
          const data = await response.json();
          store.dispatch(storeConcertDetails(data));
        } catch (error) {
          console.error(error);
        }
      })();
      break;
    }

    case ConcertActionsType.POST_ADD_CONCERT_FORM: {
      (async () => {
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
              throw new Error(error.errors);
            }
            store.dispatch(concertFailure(error.errors));
            throw new Error(error.errors);
          }
          action.navigate('/admin/concerts');
        } catch (error) {
          console.error(error);
        }
      })();
      break;
    }

    case ConcertActionsType.POST_EDIT_CONCERT_FORM: {
      (async () => {
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
              throw new Error(error.errors);
            }
            store.dispatch(concertFailure(error.errors));
            throw new Error(error.errors);
          }
          action.navigate('/admin/concerts');
        } catch (error) {
          console.error(error);
        }
      })();
      break;
    }

    case ConcertActionsType.DELETE_CONCERT: {
      (async () => {
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
              throw new Error(error.errors);
            }
            store.dispatch(concertFailure(error.errors));
            throw new Error(error.errors);
          }
          store.dispatch(fetchConcertList());
        } catch (error) {
          console.error(error);
        }
      })();
      break;
    }

    default:
  }
  return next(action);
};

export default concertsMiddleware;
