/**
 * @name : PostTable
 * @description : To create a table for listing of posts
*/
import React, { Component } from 'react';
import PostHeader from './PostHeader.jsx'; 
import PostList from './PostList.jsx';

class PostTable extends Component {

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <PostHeader category={this.props.category} />
                    </thead>
                    <tbody>
                        <PostList category={this.props.category}/>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default PostTable;