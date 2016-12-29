import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import reducer  from './reducers'
import App from './App'
import './index.css'

const store = createStore(reducer)

render(
  <App {...store} />,
  document.getElementById('root')
);

store.subscribe(render());
render();
