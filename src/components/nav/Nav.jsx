import './nav.css';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useToken } from '../required/AuthProvider';
 
function Nav() {
    const token = useToken();

    return (
        <nav>
            <div>
                <i className="material-symbols-outlined">person</i>
                <Link to="/">Login</Link>
            </div>
            
            <div>
                <i className="material-symbols-outlined">person_add</i>
                <Link to="register/">Register</Link>
            </div>
            
            <div>
                <i className="material-symbols-outlined">article</i>
                <Link to="posts/">Posts</Link>
            </div>
            
            { token.token && 
                <div>
                    <i className="material-symbols-outlined">logout</i>
                    <Link to="logout/">Logout</Link>
                </div>}            
        </nav>
    );
}

export default Nav;