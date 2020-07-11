import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Router from './router';
import store from './redux/store';
import './style/common.less';
import App from './test/App';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  rootElement,
);

// ReactDOM.render((
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// ), document.getElementById('root'));
