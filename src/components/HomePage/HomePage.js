import React from 'react';
import {NavLink} from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <h1>Home!!</h1>
            <NavLink to="/Login">Login</NavLink>
        </div>
    );
};

export default HomePage;