import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app'

$(function() {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
});
