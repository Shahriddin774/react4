import React from 'react';


function PostForm({ onSubmit, register }) {
    return (
        <form onSubmit={onSubmit}>
            <input type="text" {...register("title")} placeholder="title" />
            <textarea cols="30" rows="10" {...register("body")} placeholder="body"></textarea>
            <button>create</button>
        </form>
    );
}

export default PostForm;
