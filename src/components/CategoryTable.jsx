import React, { Component } from 'react';

// Component for Blog category

import Categories from './Categories.jsx';
import _ from 'lodash';

class CategoryTable extends Component {
    
   render() {

        let blogCategories = [];
        let onUserInput = this.props.onUserInput;
        let selectedCategory = this.props.selectedCategory;

        _.forEach(this.props.blogCategories, function(category) {
            blogCategories.push(<Categories category={category.name} key={category.id} onUserInput={onUserInput} selectedCategory={selectedCategory} />);
        }); 

        return (
            <div>
            <ul>
                {blogCategories}
            </ul>
                { this.props.selectedCategory !== "" && 
                    <p>User has selected {this.props.selectedCategory} </p>
                }
            </div>
        );
    }
}

export default CategoryTable;