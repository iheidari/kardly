import React from 'react';
import ReactDOM from 'react-dom';
import Base from 'components/layout/Base';
import DefaultTheme from 'themes/default';
import * as serviceWorker from './serviceWorker';
import App from './App';

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
