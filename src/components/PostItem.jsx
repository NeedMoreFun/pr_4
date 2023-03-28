import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.name}</strong>
                <div>
                    {props.post.message}
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => props.remove(props.post)} className="btn">Удалить</MyButton>
            </div>
        </div>
    );
};

export default PostItem;