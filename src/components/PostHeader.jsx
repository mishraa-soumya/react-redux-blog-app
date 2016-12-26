import React, { Component } from 'react';

class PostHeader extends Component {

    render () {
        let postHeaderTitle = 'List of Posts for '+ this.props.category;
        return(
            <tr>
                <td colSpan="2">{postHeaderTitle}</td>
            </tr>
        );
    }
}

export default PostHeader;