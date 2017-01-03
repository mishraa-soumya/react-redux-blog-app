import React from 'react'
import { addCategory } from '../actions'
import { Button } from 'react-bootstrap'

const AddCategory = ({store}) => {
    let input;
    return (
       <div>
           <form onSubmit={ e => {
               e.preventDefault()
               if(!input.value.trim()){
                   return
               }
               store.dispatch(addCategory(input.value))
               console.log(store.getState());
               input.value = ''
           }}>
              <label>Enter Category</label>
              <input placeholder="Enter text"
                    ref={ node => {
                    input = node }}
              /> 
             <Button bsStyle="primary" type="submit">Add Category</Button>
           </form>
       </div> 
    );
}

export default AddCategory