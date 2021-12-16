import React from 'react';
import {NavLink} from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <h1>Home!!</h1>
            <NavLink to="/Registration">Sign up</NavLink><br />
            <NavLink to="/Login">Sign in</NavLink>
        </div>
    );
};

export default HomePage;