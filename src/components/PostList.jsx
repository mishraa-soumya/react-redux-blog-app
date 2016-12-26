import React, { Component } from 'react';

import posts from '../../public/posts.json';

import _ from 'lodash';

class PostList extends Component {
    
    render () {
        return (
            <tr>
                <td>
                    {
                        _.map(posts, ((post) => 
                            <li>{post.title}</li>
                        ))
                        //.filter((post) => post.categoryId === )
                    }
                </td>
            </tr>
        );
    }
}

export default PostList;