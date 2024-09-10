import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducer from '../reducers/indexReducer';
import loginMiddleware from '../middleware/loginMiddleware';
import concertsMiddleware from '../middleware/concertsMiddleware';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['login'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const enhancer = composeWithDevTools(
  applyMiddleware(loginMiddleware, concertsMiddleware),
);

const store = createStore(persistedReducer, enhancer);

const persistor = persistStore(store);

export { store, persistor };
