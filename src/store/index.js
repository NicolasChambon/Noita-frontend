import { legacy_createStore as createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from '@redux-devtools/extension';

import reducer from '../reducers/indexReducer';

import loginMiddleware from '../middleware/loginMiddleware';

const enhancer = composeWithDevTools(applyMiddleware(loginMiddleware));

const store = createStore(reducer, enhancer);

export default store;
