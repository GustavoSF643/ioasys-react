import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Providers from './providers';
import GlobalStyle from "./styles/global";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer />
    <GlobalStyle />
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root')
);
