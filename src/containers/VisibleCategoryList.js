import CategoryList from '../components/CategoryList'
import { connect } from 'react-redux'

// const getVisibleCategoryList = (categories) => {
//     return categories
// }

// export default class VisibleCategoryList extends Component {
//     componentDidMount () {
//       const { store } = this.props;
//       this.unsubscribe = store.subscribe ( () =>
//         this.forceUpdate()
//       );
//     }

//     componentWillUnmount () {
//       this.unsubscribe();
//     }

//     render () {
//         const props = this.props;
//         const { store } = props;
//         const state = store.getState();
//         console.log(state);
//         if (state.categories.length > 0){
//         return (
//          <CategoryList 
//             categories={
//               state.categories
//             }
//           />
//         )
//         } else{
//           return null
//         } 
//     }
// }

// the above pattern is a ES6 way of creating components 

// Below is a way to create container components using Connect method of React-Redux Binding Library. 

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
};

const VisibleCategoryList = 
      connect(
          mapStateToProps, 
          null
      )(CategoryList); 


export default VisibleCategoryList 