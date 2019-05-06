import 'art-lib-react/src/styles';
import './styles';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
// import enableOrDisableServiceWorker from 'service-worker/sw-register';
// enableOrDisableServiceWorker();

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById('app'));