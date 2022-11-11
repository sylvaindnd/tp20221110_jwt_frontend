import './posts.css';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Auth from '../required/Auth';
import { useToken } from '../required/AuthProvider';

function Posts() {
    const token = useToken();
    const navigate = useNavigate();
    const [posts, setPosts] = useState(false);

    async function actionAddPost(e) {
        e.preventDefault();
        const headers = new Headers();
        const title = document.querySelector('#addpost #title').value;
        const content = document.querySelector('#addpost #content').value;
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", token.token);
        headers.append("Access-Control-Allow-Origin", "http://127.0.0.1:3000");

        const requestOptions = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                title: title,
                content: content
            })
        };

        const request = await fetch('http://127.0.0.1:3001/posts/', requestOptions);
        const response = await request.json();
        if(!response._id){
            alert(response.message);
            return;
        }
        getPosts();
    }

    function getPostDate(time) {
        const date = new Date(time);

        const aZ = (int) => {
            return int <= 9 ? `0${int}` : `${int}`;
        }

        return {
            date: `${aZ(date.getFullYear())}/${aZ(date.getMonth() + 1)}/${aZ(date.getDate())}`,
            time: `${aZ(date.getHours())}:${aZ(date.getMinutes())}`
        }
    }

    async function getPosts() {
        if (!token.token) {
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

    useEffect(() => {
        getPosts();
    }, [token])

    return (
        <Auth>
            {token.isAdmin() && (
                <section id="addpost">
                    <form>
                        <input type="text" name="title" id="title" placeholder="title" />
                        <textarea name="content" id="content" placeholder="content"></textarea>
                        <button type="submit" onClick={(e) => { actionAddPost(e) }}>Create post</button>
                    </form>
                </section>
            )}
            <section id="posts">
                <ul className='posts_items'>
                    {posts && posts.map((post) => (
                        <li className='post_item' key={post._id}>
                            <div className='post_item__datetime'>
                                <span className='post_item_datetime__date'>{getPostDate(post.created_at).date}</span>
                                <span className='post_item_datetime__time'>{getPostDate(post.created_at).time}</span>
                            </div>
                            <div className='post_item__title'>
                                <span>{post.title}</span>
                            </div>
                            <div className='post_item__content'>
                                <span>{post.content}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </Auth>
    )
}

export default Posts;