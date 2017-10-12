import React from 'react'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'
import ReactDOM from 'react-dom';
import App from './containers/App'
import FormContainer from './containers/FormContainer'

const Root = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/">
        <IndexRoute exact component={App}/>
      </Route>
      <Route path="admin/projects" component={FormContainer}/>
    </Router>
  )
}

export default Root;
