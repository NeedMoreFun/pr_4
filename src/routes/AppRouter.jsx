import React from "react";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Counter from "../pages/Counters";
import Error from "../pages/Error";
import {Route, Routes} from "react-router-dom";

const AppRouter = () => {
    
    return (
        <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/" element={<About/>}/>
            <Route path="/posts" element={<Posts/>}/>
            <Route path="/counters" element={<Counter/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    )
}

export default AppRouter;