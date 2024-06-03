import React from 'react';

function PostList({ posts, deletePost, getOnePost }) {
    return (
        <ul>
            {posts.length > 0 ? (
                posts.map(post => (
                    <li key={post.id}>
                        {post.title}
                        <button onClick={() => deletePost(post.id)}>delete</button>
                        <button onClick={() => getOnePost(post.id)}>get more info</button>
                    </li>
                ))
            ) : (
                <p>список пуст</p>
            )}
        </ul>
    );
}

export default PostList;
