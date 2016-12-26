import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// import categories json
import Categories from '../public/categories.json';

ReactDOM.render(
  <App categories={Categories} />,
  document.getElementById('root')
);
