import {
  FETCH_CONCERT_LIST,
  storeConcertList,
  POST_ADD_CONCERT_FORM,
  POST_EDIT_CONCERT_FORM,
  concertFailure,
  FETCH_CONCERT_DETAILS,
  storeConcertDetails,
} from '../actions/concertsActions';
import { logout } from '../actions/loginActions';

const concertsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CONCERT_LIST: {
      (async () => {
        try {
          const user_id = store.getState().login.loggedId;
          const token = store.getState().login.token;

          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/concerts?user_id=${user_id}`,
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
              store.dispatch(storeConcertList([]));
              store.dispatch(
                concertFailure([
                  'The session has expired, please log in again.',
                ]),
              );
            }
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

    case FETCH_CONCERT_DETAILS: {
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
                concertFailure([
                  'The session has expired, please log in again.',
                ]),
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

    case POST_ADD_CONCERT_FORM: {
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
                concertFailure([
                  'The session has expired, please log in again.',
                ]),
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

    case POST_EDIT_CONCERT_FORM: {
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
                concertFailure([
                  'The session has expired, please log in again.',
                ]),
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

    default:
  }
  return next(action);
};

export default concertsMiddleware;
