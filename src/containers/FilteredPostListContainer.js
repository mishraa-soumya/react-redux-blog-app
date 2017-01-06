import React, {Component} from 'react'
import Posts from '../../public/posts.json'
import PostList from '../components/PostList'

const getCategoryPostList = (categoryId) => {
    return Posts.filter((post) => {
          return post.categoryId === categoryId
    })
}

class FilteredPostListContainer extends Component {
  
  constructor (props) {
    super(props);
    console.log(this.props.params);
    const categoryId = parseInt(this.props.params.id,10);
    
  }

  getInitialState () {
    console.log(this.categoryId);
    this.state = {
      selectedCategory: this.categoryId
    };
    console.log(this.state.selectedCategory);
  }
  
  componentWillReceiveProps (newProps) {
      console.log(newProps.params);
      this.setState({
        selectedCategory: newProps.params.id
      })
  }

  render () {
    return (
      <div>
        <h3>Posts for category - {this.state.selectedCategory}</h3>
        <PostList 
          posts={getCategoryPostList(
              this.state.selectedCategory
          )}
        />
      </div>
    );
  }
}

export default FilteredPostListContainer