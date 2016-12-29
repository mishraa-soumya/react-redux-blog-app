import React from 'react'
import { addCategory } from '../actions'

let AddCategory = ({ store }) => {
    let input
    return (
       <div>
           <form onSubmit={ e => {
               e.preventDefault()
               if(!input.value.trim()){
                   return
               }
               store.dispatch(addCategory(input.value))
               input.value = ''
           }}>
              <input ref={ node => {
                input = node }} /> 
                <button type="submit">
                    Add Category
                </button>
           </form>
       </div> 
    );
}

export default AddCategory