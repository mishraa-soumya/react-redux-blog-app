import React , { PropTypes } from 'react'

const renderPosts = (posts) => (
    <li key={posts.id}>{ posts.title }</li>
  );

const PostList = ({ posts }) => {
  return (
      <ul>
        {posts.map(renderPosts)}  
      </ul>
  );
}

PostList.PropTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      categoryId: PropTypes.number.isRequired
    }))
}
export default PostList