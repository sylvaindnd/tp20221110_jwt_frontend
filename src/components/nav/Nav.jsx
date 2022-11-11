import './nav.css';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useToken } from '../required/AuthProvider';
 
function Nav() {
    const token = useToken();

    return (
        <nav>
            <Link to="/">Login</Link>
            <Link to="register/">Register</Link>
            <Link to="posts/">Posts</Link>
            { token.token ? <Link to="logout/">Logout</Link> : ''}            
        </nav>
    );
}

export default Nav;