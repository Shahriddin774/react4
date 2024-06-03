import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";
import PostForm from "../../components/PostForm";
import PostList from "../../components/PostList";
import PostDetails from "../../components/PostDetails";

function PostsPage() {
    const { handleSubmit, register, reset } = useForm();
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({});

    useEffect(() => {
        getPosts();
    }, []);

    async function getPosts() {
        const response = await axios.get("http://localhost:8000/posts");
        setPosts(response.data);
    }

    async function submit(values) {
        const response = await axios.post("http://localhost:8000/posts", values);
        reset();
        getPosts();
    }

    async function deletePost(id) {
        const response = await axios.delete(`http://localhost:8000/posts/${id}`);
        getPosts();
    }

    async function getOnePost(id) {
        const response = await axios.get(`http://localhost:8000/posts/${id}`);
        setPost(response.data);
    }

    return (
        <div>
            <h2>Posts list</h2>
            <PostForm onSubmit={handleSubmit(submit)} register={register} />
            <PostList posts={posts} deletePost={deletePost} getOnePost={getOnePost} />
            <PostDetails post={post} />
        </div>
    );
}

export default PostsPage;
