import React from "react";
import PostItem from "./PostItem";
import "../styles/App.css"

const PostList = ({posts, title, remove}) => {
    const h1Style = {
        textAlign: 'center',
        marginBottom: '15px'
    }
    return (
        <div>
           <h1 style={h1Style}>{title}</h1>
            {posts.map(post =>
                <PostItem remove={remove} post={post}></PostItem>
            )} 
        </div>
    );
};

export default PostList;