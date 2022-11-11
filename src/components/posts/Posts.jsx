import './posts.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Auth from '../required/Auth';

function Posts(){
    const navigate = useNavigate();
    
    return (
        <Auth>
            posts
        </Auth>
    )
}

export default Posts;