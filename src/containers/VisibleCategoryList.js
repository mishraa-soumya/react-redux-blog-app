import React, {Component} from 'react'
import CategoryList from '../components/CategoryList'

// const getVisibleCategoryList = (categories) => {
//     return categories
// }

export default class VisibleCategoryList extends Component {
    componentDidMount () {
      const { store } = this.props;
      this.unsubscribe = store.subscribe ( () =>
        this.forceUpdate()
      );
    }

    componentWillUnmount () {
      this.unsubscribe();
    }

    render () {
        const props = this.props;
        const { store } = props;
        const state = store.getState();
        console.log(state);
        if (state.categories.length > 0){
        return (
         <CategoryList 
            categories={
              state.categories
            }
          />
        )
        } else{
          return null
        } 
    }
}