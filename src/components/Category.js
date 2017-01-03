import React, {PropTypes} from 'react'
import { Link } from 'react-router'

const Category = ({ id, text }) => (
  <div>
    <Link to={"/post/"+id} key={id}>{text}</Link>
  </div>
)

// class Category extends Component {

//   constructor (props) {
//     super(props);
//     this.handleRedirect = this.handleRedirect.bind(this);
//   }

//   handleRedirect () {
//     browserHistory.push('/post');
//   }

//   render () {
//     let text = this.props.category;
//     let id = this.props.category;
    
//     return (
//       <div>
//         <Link to={`/post/`+id} onClick={ this.handleRedirect }>{text}</Link>
//       </div>
//     );
//   }
// }

Category.propTypes = {
  text: PropTypes.string.isRequired
}

export default Category