import { legacy_createStore as createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from '@redux-devtools/extension';

import reducer from '../reducers/indexReducer';

import loginMiddleware from '../middleware/loginMiddleware';
import concertsMiddleware from '../middleware/concertsMiddleware';

const enhancer = composeWithDevTools(
  applyMiddleware(loginMiddleware, concertsMiddleware),
);

const store = createStore(reducer, enhancer);

export default store;
