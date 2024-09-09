import { FETCH_CONCERTS, storeConcerts } from '../actions/concertsActions';
import { logout, loginFailure } from '../actions/loginActions';

const concertsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CONCERTS: {
      const getConcerts = async () => {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/concerts`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
              },
            },
          );

          if (!response.ok) {
            const error = await response.json();
            if (error.status === 401) {
              localStorage.removeItem('token');
              store.dispatch(logout());
              store.dispatch(storeConcerts([]));
              store.dispatch(
                loginFailure(['The session has expired, please log in again.']),
              );
            }
            throw new Error(error.errors);
          }

          const data = await response.json();
          store.dispatch(storeConcerts(data));
        } catch (error) {
          console.error(error);
        }
      };
      getConcerts();
      break;
    }
    default:
  }
  return next(action);
};

export default concertsMiddleware;
