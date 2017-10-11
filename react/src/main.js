import 'babel-polyfill';
import React from 'react';
import { Router, IndexRoute, Route, browserHistory } from 'react-router'
import ReactDOM from 'react-dom';
import App from './containers/App'
import FormContainer from './containers/FormContainer'

$(function() {
  ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute exact component={App}/>
      </Route>
      <Route path="admin/projects" component={FormContainer}/>
    </Router>,
    document.getElementById('app')
  );
});
