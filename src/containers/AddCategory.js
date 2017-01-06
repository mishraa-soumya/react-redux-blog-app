import React from 'react'
import { addCategory } from '../actions'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'

let AddCategory = ({dispatch}) => {
    let input;
    return (
       <div>
           <form onSubmit={ e => {
               e.preventDefault()
               if(!input.value.trim()){
                   return
               }
               dispatch(addCategory(input.value))
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
// AddCategory = connect(
//     state => {
//         return {};
//     },
//     dispatch => {
//         return { dispatch }
//     }
//      )(AddCategory);
// AddCategory = connect(null,null)(AddCategory);   

// above pattern can be reduced to below, as there are no props using state, 
// and dispatch is injected still if nothing is passed

AddCategory = connect()(AddCategory);
export default AddCategory