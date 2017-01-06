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
    console.log(categoryId);
    this.state = {
      selectedCategory: categoryId
    };
    console.log(this.state.selectedCategory);
  }
  
  componentDidMount () {

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