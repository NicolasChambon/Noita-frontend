import { combineReducers } from 'redux';

import globalReducer from './globalReducer';
import loginReducer from './loginReducer';
import concertsReducer from './concertsReducer';

const rootReducer = combineReducers({
  global: globalReducer,
  login: loginReducer,
  concerts: concertsReducer,
});

export default rootReducer;
