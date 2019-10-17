import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Base from './components/layout/Base';
import { DefaultTheme } from './themes';
import * as serviceWorker from './serviceWorker';

const root = (
  <Base theme={DefaultTheme}>
    <App />
  </Base>
);
ReactDOM.render(root, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
