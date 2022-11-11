import './posts.css';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Auth from '../required/Auth';
import { useToken } from '../required/AuthProvider';

function Posts(){
    const token = useToken();
    const navigate = useNavigate();
    const [posts, setPosts] = useState(false);

    async function getPosts(){
        if(!token.token){
            setPosts(false);
            return false;
        }

        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", token.token);
        headers.append("Access-Control-Allow-Origin", "http://127.0.0.1:3000");
        const requestOptions = {
            method: 'GET',
            headers: headers
        };

        const request = await fetch('http://127.0.0.1:3001/posts/', requestOptions);
        const response = await request.json();     
        setPosts(response);

        return response;
    }

    useEffect(()=>{
        getPosts();
    }, [token])
    
    return (
        <Auth>
            <div>
                <ul>
                    {posts && posts.map((post) => (
                        <li key={post._id}> {post.title} </li>
                    ))}
                </ul>
            </div>
        </Auth>
    )
}

export default Posts;