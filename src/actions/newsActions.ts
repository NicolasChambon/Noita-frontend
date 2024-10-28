export const FETCH_NEWS_LIST = 'FETCH_NEWS_LIST';
export const STORE_NEWS_LIST = 'STORE_NEWS_LIST';
export const DISPLAY_REMOVE_BOX = 'DISPLAY_REMOVE_BOX';
export const HIDE_REMOVE_BOX = 'HIDE_REMOVE_BOX';
export const CHANGE_NEWS_INPUT = 'CHANGE_NEWS_INPUT';
export const POST_ADD_NEWS_FORM = 'POST_ADD_NEWS_FORM';
export const POST_EDIT_NEWS_FORM = 'POST_EDIT_NEWS_FORM';
export const NEWS_FAILURE = 'NEWS_FAILURE';
export const FETCH_NEWS_DETAILS = 'FETCH_NEWS_DETAILS';
export const STORE_NEWS_DETAILS = 'STORE_NEWS_DETAILS';
export const DELETE_NEWS = 'DELETE_NEWS';

export const fetchNewsList = () => {
  return {
    type: FETCH_NEWS_LIST,
  };
};

export const storeNewsList = (newsList) => {
  return {
    type: STORE_NEWS_LIST,
    newsList,
  };
};

export const displayRemoveBox = (newsId) => {
  return {
    type: DISPLAY_REMOVE_BOX,
    newsId,
  };
};

export const hideRemoveBox = () => {
  return {
    type: HIDE_REMOVE_BOX,
  };
};

export const changeNewsInput = (value, identifier) => {
  return {
    type: CHANGE_NEWS_INPUT,
    value,
    identifier,
  };
};

export const postAddNewsForm = (navigate) => {
  return {
    type: POST_ADD_NEWS_FORM,
    navigate,
  };
};

export const postEditNewsForm = (navigate) => {
  return {
    type: POST_EDIT_NEWS_FORM,
    navigate,
  };
};

export const newsFailure = (failureMessages) => {
  return {
    type: NEWS_FAILURE,
    failureMessages,
  };
};

export const fetchNewsDetails = (newsId) => {
  return {
    type: FETCH_NEWS_DETAILS,
    newsId,
  };
};

export const storeNewsDetails = (newsDetails) => {
  return {
    type: STORE_NEWS_DETAILS,
    newsDetails,
  };
};

export const deleteNews = (newsId) => {
  return {
    type: DELETE_NEWS,
    newsId,
  };
};
