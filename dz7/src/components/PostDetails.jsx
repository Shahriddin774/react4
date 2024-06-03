import React from 'react';

function PostDetails({ post }) {
    return (
        <ul>
            <li>
                title: {post.title}
            </li>
            <li>
                body: {post.body}
            </li>
        </ul>
    );
}

export default PostDetails;
