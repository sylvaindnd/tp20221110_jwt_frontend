import './nav.css';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useToken } from '../required/AuthProvider';

function Nav() {
    const token = useToken();
    const location = useLocation();
    const [path, setPath] = useState('');

    useEffect(()=>{
        const p = location.pathname.split('/').join('');
        setPath(p);
    },[location])

    return (
        <nav>
            <Link to="/" className={path === '' ? 'active' : ''}>
                <i className="material-symbols-outlined">person</i>
                Login
            </Link>

            <Link to="register/" className={path === 'register' ? 'active' : ''}>
                <i className="material-symbols-outlined">person_add</i>
                Register
            </Link>

            <Link to="posts/" className={path === 'posts' ? 'active' : ''}>
                <i className="material-symbols-outlined">article</i>
                Posts
            </Link>

            {token.token &&
                <Link to="logout/">
                    <i className="material-symbols-outlined">logout</i>
                    Logout
                </Link>
            }
        </nav>
    );
}

export default Nav;