import React from "react";
import {Link} from "react-router-dom";

const NavBar = () => {
    
    return (
        <div className="navbar">
            <div className="navbar__links">
                <Link className="link" to="/about">О приложении</Link>
                <Link className="link" to="/posts">Диалоги</Link>
                <Link className="link" to="/counters">Счётчики</Link>
            </div>
        </div>
    )
}

export default NavBar;