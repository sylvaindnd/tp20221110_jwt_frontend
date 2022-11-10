import './nav.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <Link to="/">Login</Link>
            <Link to="register/">Register</Link>
            <Link to="posts/">Posts</Link>
            <Link to="logout/">Logout</Link>
        </nav>
    );
}

export default Nav;