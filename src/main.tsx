import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import router from '@/routes/Routes';
import { RouterProvider } from 'react-router-dom';
import isValidProp from '@emotion/is-prop-valid';
import { StyleSheetManager } from 'styled-components';
import store from './stores/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StyleSheetManager shouldForwardProp={isValidProp}>
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  </StyleSheetManager>,
);
