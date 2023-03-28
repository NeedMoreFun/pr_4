import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";

const Counter = (props) => {
    const [count, setCount] = useState(props.counter.value)
    
    function increment () {
        setCount(count + 1)
    }

    function decrement () {
        setCount(count - 1)
    }

    return (
        <div className="counter">
            <h1 style={{textAlign: "center"}}>{props.counter.title}</h1>
            <MyButton className="btn" onClick={decrement}>Decrement</MyButton>
            <h1>{count}</h1>
            <MyButton className="btn" onClick={increment}>Increment</MyButton>
        </div>
    )
}

export default Counter;