import { combineReducers } from 'redux';

import globalReducer from './globalReducer';
import loginReducer from './loginReducer';
import concertsReducer from './concertsReducer';
import newsReducer from './newsReducer';
import carouselReducer from './carouselReducer';

const rootReducer = combineReducers({
  global: globalReducer,
  login: loginReducer,
  concerts: concertsReducer,
  news: newsReducer,
  carousel: carouselReducer,
});

export default rootReducer;
