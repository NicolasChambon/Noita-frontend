import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './components/App/App';
import { store, persistor } from './store';

import './styles/index.scss';

const root = document.getElementById('root')!;

createRoot(root).render(
  <BrowserRouter>
    <Provider store={store}>
      <StrictMode>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </StrictMode>
    </Provider>
  </BrowserRouter>,
);
