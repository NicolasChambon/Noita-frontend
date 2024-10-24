import {
  FETCH_CAROUSEL_PICTURES,
  storePictureList,
  ADD_PICTURE,
  carouselFailure,
  fetchCarouselPictures,
  DELETE_PICTURE,
  UPDATE_PICTURE,
  CHANGE_POSITION,
} from '../actions/carouselActions';
import { logout, loginFailure } from '../actions/loginActions';

const carouselMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CAROUSEL_PICTURES: {
      (async () => {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/carousel`,
          );

          if (!response.ok) {
            const error = await response.json();
            throw new Error(error.errors);
          }
          const data = await response.json();
          store.dispatch(storePictureList(data));
        } catch (error) {
          console.error(error);
        }
      })();
      break;
    }

    case ADD_PICTURE: {
      (async () => {
        try {
          const user_id = store.getState().login.loggedId;
          const token = store.getState().login.token;
          const picture64 = store.getState().carousel.pictureInput;

          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/carousel?user_id=${user_id}`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({
                picture64,
              }),
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
            store.dispatch(carouselFailure(error.errors));
            throw new Error(error.errors);
          }
          store.dispatch(fetchCarouselPictures());
        } catch (error) {
          console.error(error);
        }
      })();
      break;
    }

    case DELETE_PICTURE: {
      (async () => {
        try {
          const user_id = store.getState().login.loggedId;
          const token = store.getState().login.token;
          const picture_id = action.pictureId;

          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/carousel/${picture_id}?user_id=${user_id}`,
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
            store.dispatch(carouselFailure(error.errors));
            setTimeout(() => {
              store.dispatch(carouselFailure([]));
            }, 5000);

            throw new Error(error.errors);
          }
          store.dispatch(fetchCarouselPictures());
        } catch (error) {
          console.error(error);
        }
      })();
      break;
    }

    case UPDATE_PICTURE: {
      (async () => {
        try {
          const user_id = store.getState().login.loggedId;
          const token = store.getState().login.token;
          const picture64 = store.getState().carousel.pictureInput;
          const pictureId = action.pictureId;

          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/carousel/${pictureId}?user_id=${user_id}`,
            {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({
                picture64,
              }),
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
            store.dispatch(carouselFailure(error.errors));
            throw new Error(error.errors);
          }
          // We refresh the browser page
          window.location.reload();
        } catch (error) {
          console.error(error);
        }
      })();
      break;
    }

    case CHANGE_POSITION: {
      (async () => {
        try {
          const user_id = store.getState().login.loggedId;
          const token = store.getState().login.token;
          const pictureId = action.pictureId;
          const direction = action.direction;

          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/carousel/position/${pictureId}?user_id=${user_id}`,
            {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({
                direction,
              }),
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
            store.dispatch(carouselFailure(error.errors));
            throw new Error(error.errors);
          }
          store.dispatch(fetchCarouselPictures());
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

export default carouselMiddleware;
