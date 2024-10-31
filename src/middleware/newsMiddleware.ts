import { NewsActionsEnum } from '../actions/actionsIndex';
import {
  storeNewsList,
  newsFailure,
  storeNewsDetails,
  fetchNewsList,
} from '../actions/news/newsActions';
import { logout, loginFailure } from '../actions/login/loginActions';

const newsMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case NewsActionsEnum.FETCH_NEWS_LIST: {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/posts`);

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.errors.join(', '));
        }
        const data = await response.json();
        store.dispatch(storeNewsList(data));
      } catch (error) {
        console.error(error);
      }
      break;
    }

    case NewsActionsEnum.FETCH_NEWS_DETAILS: {
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
              loginFailure(['The session has expired, please log in again.']),
            );
          }
          throw new Error(error.errors.join(', '));
        }
        const data = await response.json();
        store.dispatch(storeNewsDetails(data));
      } catch (error) {
        console.error(error);
      }
      break;
    }

    case NewsActionsEnum.POST_ADD_NEWS_FORM: {
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
              loginFailure(['The session has expired, please log in again.']),
            );
            throw new Error(error.errors.join(', '));
          }
          store.dispatch(newsFailure(error.errors));
          throw new Error(error.errors.join(', '));
        }
        action.navigate('/admin/news');
      } catch (error) {
        console.error(error);
      }
      break;
    }

    case NewsActionsEnum.POST_EDIT_NEWS_FORM: {
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
              loginFailure(['The session has expired, please log in again.']),
            );
            throw new Error(error.errors.join(', '));
          }
          store.dispatch(newsFailure(error.errors));
          throw new Error(error.errors.join(', '));
        }
        action.navigate('/admin/news');
      } catch (error) {
        console.error(error);
      }
      break;
    }

    case NewsActionsEnum.DELETE_NEWS: {
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
              loginFailure(['The session has expired, please log in again.']),
            );
            throw new Error(error.errors.join(', '));
          }
          store.dispatch(newsFailure(error.errors));
          throw new Error(error.errors.join(', '));
        }
        store.dispatch(fetchNewsList());
      } catch (error) {
        console.error(error);
      }
      break;
    }

    default:
  }
  return next(action);
};

export default newsMiddleware;
