import React, { Component } from 'react';
import './App.css';

import Header from './components/Header.jsx';

import CategoryTable from './components/CategoryTable';
import PostTable from './components/PostTable.jsx';

import _ from 'lodash';

class App extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
        category: ''
      };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(selectedCategory) {
      this.setState({
          category: selectedCategory
      });
   }

  render () {

    return (
      <div>
        <Header />
        <CategoryTable blogCategories={this.props.categories} selectedCategory={this.state.category} onUserInput={this.handleUserInput} />
        { this.state.category != '' && 
          <PostTable category={this.state.category} />
        }
      </div>
    );
  }
}

export default App;