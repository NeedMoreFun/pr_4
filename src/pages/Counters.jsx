import React from "react";
import "../styles/App.css"
import Counter from "../components/Counter";

const Counters = () => {

    return (
        <div>
            <Counter counter={{value: 25, title: 'Счётчик 1'}}/>
            <Counter counter={{value: 22, title: 'Счётчик 2'}}/>
            <Counter counter={{value: 24, title: 'Счётчик 3'}}/>
        </div>
    )
}

export default Counters;