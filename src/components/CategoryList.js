import React, { propTypes } from 'react'
import Category from './Category'

const CategoryList = ({ categories }) => {
  <ul>
      {categories.map(category => 
        <Category key={category.id}
        {...category}
        />  
      )}
  </ul>
}

CategoryList.propTypes = {
  
}