import './login.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useToken } from '../required/AuthProvider';

function Login() {
    const token = useToken();
    const navigate = useNavigate();

    async function actionLogin(e){
        e.preventDefault();
        const email = document.querySelector('#login #email').value;
        const password = document.querySelector('#login #password').value;
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Access-Control-Allow-Origin", "http://127.0.0.1:3000");
        const requestOptions = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                email: email,
                password: password
            })
        };

        const request = await fetch('http://127.0.0.1:3001/user/login/', requestOptions);
        const response = await request.json();
        console.log(response);
        if(!response.token){
            alert(response.message);
            return;
        }
        token.updateToken(response.token);
        navigate('posts/');
        return;
    }

    return (
        <section id="login">
            <form>
                <input type="email" name="email" id="email" placeholder="email"/>
                <input type="password" name="password" id="password" placeholder="password"/>
                <button type="submit" onClick={(e) => {actionLogin(e)}}>Login</button>
            </form> 
        </section>        
    );
}

export default Login;