// Dependencies
import {
  legacy_createStore as createStore,
  applyMiddleware,
  Store,
  Action,
} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Reducer
import rootReducer, { RootState } from '../reducers/indexReducer';

// Middleware
import loginMiddleware from '../middleware/loginMiddleware';
import concertsMiddleware from '../middleware/concertsMiddleware';
import newsMiddleware from '../middleware/newsMiddleware';
import carouselMiddleware from '../middleware/carouselMiddleware';

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage,
  whitelist: ['login'],
};

const persistedReducer = persistReducer<RootState, Action>(
  persistConfig,
  rootReducer as never, // TODO: fix this "never"
);

const enhancer = composeWithDevTools(
  applyMiddleware(
    loginMiddleware,
    concertsMiddleware,
    newsMiddleware,
    carouselMiddleware,
  ),
);

const store: Store<RootState, Action> = createStore(persistedReducer, enhancer);

const persistor = persistStore(store);

// Exports
export { store, persistor };
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
