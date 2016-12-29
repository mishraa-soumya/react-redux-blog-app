import React, { Component } from 'react'
import Header from './components/Header.js'
import AddCategory from './containers/AddCategory.js'
import VisibleCategoryList from './containers/VisibleCategoryList.js'
import Footer from './components/Footer.js'
import _ from 'lodash';
import './App.css';

// class App extends Component {
  
//   constructor (props) {
//     super(props);
//     this.state = {
//         category: ''
//       };
//     this.handleUserInput = this.handleUserInput.bind(this);
//   }

//   handleUserInput(selectedCategory) {
//       this.setState({
//           category: selectedCategory
//       });
//    }

//   render () {

//     return (
//       <div>
//         <Header />
//         <CategoryTable blogCategories={this.props.categories} selectedCategory={this.state.category} onUserInput={this.handleUserInput} />
//         { this.state.category != '' && 
//           <PostTable category={this.state.category} />
//         }
//       </div>
//     );
//   }
// }

const App = ({ store }) => (
  <div>
    <Header />
    <AddCategory {...store} />
    <VisibleCategoryList />
    <Footer />
  </div>
)

export default App;