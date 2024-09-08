import { combineReducers } from 'redux';

import globalReducer from './globalReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  global: globalReducer,
  login: loginReducer,
});

export default rootReducer;
