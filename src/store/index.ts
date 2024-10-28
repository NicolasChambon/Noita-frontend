// Dependencies
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducer from '../reducers/indexReducer';

// Middleware
import loginMiddleware from '../middleware/loginMiddleware';
import concertsMiddleware from '../middleware/concertsMiddleware';
import newsMiddleware from '../middleware/newsMiddleware';
import carouselMiddleware from '../middleware/carouselMiddleware';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['login'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const enhancer = composeWithDevTools(
  applyMiddleware(
    loginMiddleware,
    concertsMiddleware,
    newsMiddleware,
    carouselMiddleware,
  ),
);

const store = createStore(persistedReducer, enhancer);

const persistor = persistStore(store);

// Exports
export { store, persistor };
