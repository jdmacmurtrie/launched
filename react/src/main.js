import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root'

$(function() {
  ReactDOM.render(
    <Root />,
    document.getElementById('app')
  );
});
