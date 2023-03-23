import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [message, setMessage] = useState('')
    const [name, setName] = useState('')

    const addNewMessage = (e) => {
        e.preventDefault()
        const newPost = {
            id:Date.now(), name, message
        }
        create(newPost)
        setName('')
        setMessage('')
    }

    return (
        <form>
            <MyInput type="text" placeholder="Имя пользователя" value={name} onChange={e => setName(e.target.value)} />
            <MyInput type="text" placeholder="Сообщение" value={message} onChange={e => setMessage(e.target.value)} />
            <MyButton onClick={addNewMessage}>Отправить</MyButton>
        </form>
    );
};

export default PostForm;