import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import projects from './reducers/projects'

const store = createStore(projects)

$(function() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
})
