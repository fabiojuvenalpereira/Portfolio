import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './globalStyle';
import Provider from './context/Provider';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Provider>
      <App />
      <GlobalStyle />
    </Provider>
  </BrowserRouter>,
);

reportWebVitals();
