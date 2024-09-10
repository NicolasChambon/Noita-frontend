import {
  FETCH_NEWS_LIST,
  storeNewsList,
  POST_ADD_NEWS_FORM,
  POST_EDIT_NEWS_FORM,
  newsFailure,
  FETCH_NEWS_DETAILS,
  storeNewsDetails,
  DELETE_NEWS,
  fetchNewsList,
} from '../actions/newsActions';
import { logout } from '../actions/loginActions';

const newsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_NEWS_LIST: {
      (async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/posts`);

          if (!response.ok) {
            const error = await response.json();
            if (error.status === 401) {
              store.dispatch(logout());
              store.dispatch(storeNewsList([]));
              store.dispatch(
                newsFailure(['The session has expired, please log in again.']),
              );
            }
            throw new Error(error.errors);
          }
          const data = await response.json();
          store.dispatch(storeNewsList(data));
        } catch (error) {
          console.error(error);
        }
      })();
      break;
    }

    case FETCH_NEWS_DETAILS: {
      (async () => {
        try {
          const user_id = store.getState().login.loggedId;
          const token = store.getState().login.token;
          const news_id = action.newsId;

          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/posts/${news_id}?user_id=${user_id}`,
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
                newsFailure(['The session has expired, please log in again.']),
              );
            }
            throw new Error(error.errors);
          }
          const data = await response.json();
          store.dispatch(storeNewsDetails(data));
        } catch (error) {
          console.error(error);
        }
      })();
      break;
    }

    case POST_ADD_NEWS_FORM: {
      (async () => {
        try {
          const user_id = store.getState().login.loggedId;
          const token = store.getState().login.token;
          const form = store.getState().news.form;

          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/posts?user_id=${user_id}`,
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
                newsFailure(['The session has expired, please log in again.']),
              );
              throw new Error(error.errors);
            }
            store.dispatch(newsFailure(error.errors));
            throw new Error(error.errors);
          }
          action.navigate('/admin/news');
        } catch (error) {
          console.error(error);
        }
      })();
      break;
    }

    case POST_EDIT_NEWS_FORM: {
      (async () => {
        try {
          const user_id = store.getState().login.loggedId;
          const token = store.getState().login.token;
          const form = store.getState().news.form;
          const news_id = store.getState().news.newsDetails.id;

          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/posts/${news_id}?user_id=${user_id}`,
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
                newsFailure(['The session has expired, please log in again.']),
              );
              throw new Error(error.errors);
            }
            store.dispatch(newsFailure(error.errors));
            throw new Error(error.errors);
          }
          action.navigate('/admin/news');
        } catch (error) {
          console.error(error);
        }
      })();
      break;
    }

    case DELETE_NEWS: {
      (async () => {
        try {
          const user_id = store.getState().login.loggedId;
          const token = store.getState().login.token;
          const news_id = action.newsId;

          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/posts/${news_id}?user_id=${user_id}`,
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
                newsFailure(['The session has expired, please log in again.']),
              );
              throw new Error(error.errors);
            }
            store.dispatch(newsFailure(error.errors));
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

export default newsMiddleware;
