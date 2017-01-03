import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import blogApp  from './reducers'
import App from './App'
import './index.css'
import { Router, Route, browserHistory } from 'react-router'
import FilteredPostListContainer from './containers/FilteredPostListContainer'
import { syncHistoryWithStore } from 'react-router-redux'

const store = createStore(blogApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const history = syncHistoryWithStore(browserHistory, store)

render((
  <Router history={ history}>
    <Route path="/app" component={App} store={ store }>
      <Route path="/post/:id" component={FilteredPostListContainer} store={ store }/>
    </Route>
  </Router>
)
  ,
  document.getElementById('root')
);