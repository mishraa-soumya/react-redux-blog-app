import { combineReducers } from 'redux'
import categories  from './categories'
import { routerReducer } from 'react-router-redux'

const blogApp = combineReducers({
    categories,
    routing: routerReducer  
})

export default blogApp