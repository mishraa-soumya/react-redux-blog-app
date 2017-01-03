import React from 'react'
import Header from './components/Header.js'
import AddCategory from './containers/AddCategory.js'
import VisibleCategoryList from './containers/VisibleCategoryList.js'
import _ from 'lodash';
import './App.css';


const App = ({children, route}) => {
  const store = route.store;
  return (
    <div>
      <Header />
      <AddCategory store={store} />
      <VisibleCategoryList store={store} />
      {children}
   </div>
  );
};

export default App;