import App from './App';
import FontStyles from './styles/defaults/fonts';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-router';
import { HashRouter } from 'react-router-dom';

// Import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <HashRouter>
      <FontStyles />
      <App />
    </HashRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
