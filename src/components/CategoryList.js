import React, { PropTypes } from 'react'
import Category from './Category'

const CategoryList = ({ categories }) => (
  <ul>
      {categories.map(category => 
        <Category key={category.id}
        {...category}
        />  
      )}
  </ul>
)

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default CategoryList