import React, { useState } from "react";
import PostList from "../components/PostList";
import "../styles/App.css"
import PostForm from "../components/PostForm";

function Posts() {
    const [posts, setPosts] = useState([])

    const createMessage = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

  return (
    <div className="App">
        <PostForm create={createMessage} />
        <PostList remove={removePost} posts={posts} title="Сообщения"/>
    </div>
  );
}

export default Posts;
