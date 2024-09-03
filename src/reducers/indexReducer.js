import { combineReducers } from 'redux';

import globalReducer from './globalReducer';
import adminReducer from './adminReducer';

const rootReducer = combineReducers({
  global: globalReducer,
  admin: adminReducer,
});

export default rootReducer;
