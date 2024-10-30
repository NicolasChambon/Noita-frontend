// Action types
import { CarouselAction } from '../actions/carousel/carouselActionTypes';
import { ConcertsAction } from '../actions/concert/concertsActionTypes';
import { GlobalAction } from '../actions/global/globalActionTypes';
import { LoginAction } from '../actions/login/loginActionTypes';
import { NewsAction } from '../actions/news/newsActionTypes';

// Dependencies
import { combineReducers } from 'redux';

// Reducers
import carouselReducer from './carouselReducer';
import concertsReducer from './concertsReducer';
import globalReducer from './globalReducer';
import loginReducer from './loginReducer';
import newsReducer from './newsReducer';

export const rootReducer = combineReducers({
  carousel: carouselReducer,
  concerts: concertsReducer,
  global: globalReducer,
  login: loginReducer,
  news: newsReducer,
});

// rootReducer is a function so we use ReturnType to get the return type of the
// function.
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
