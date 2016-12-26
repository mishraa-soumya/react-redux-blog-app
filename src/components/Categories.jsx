/**
 * @name: Categories 
 * @description : Component for blog categories 
 */

import React , { Component } from 'react';

class Categories extends Component {
    
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(){
        this.props.onUserInput(this.category.value);
    }

     render () {
         return (
             <li>
                <div>
                    <input
                    type="checkbox"
                    checked={this.props.selectedCategory === this.props.category}
                    value={this.props.category} 
                    onChange={this.handleChange}
                    ref={(input) => this.category = input}
                    />
                    {this.props.category}
                </div>
             </li>   
         );
     }
}

export default Categories;