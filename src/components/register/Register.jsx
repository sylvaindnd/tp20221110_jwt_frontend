import './register.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();

    async function actionRegister(e){
        e.preventDefault();
        const email = document.querySelector('#register #email').value;
        const password = document.querySelector('#register #password').value;
        const role = document.querySelector('#register #role').value;
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
        const requestOptions = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                email: email,
                password: password,
                role: role
            })
        };

        const request = await fetch('http://127.0.0.1:3001/user/register/', requestOptions);
        const response = await request.json();
        console.log(response);
        if(!response.valid){
            alert(response.message);
            return;
        }
        navigate('/');
        return;
    }

    return (
        <section id="register">
            <form>
                <input type="email" name="email" id="email" placeholder="email"/>
                <input type="password" name="password" id="password" placeholder="password"/>
                <label>Role
                    <select name="role" id="role">
                        <option value="0">admin</option>
                        <option value="1">user</option>
                    </select>
                </label>
                
                <button type="submit" onClick={(e) => {actionRegister(e)}}>Register</button>
            </form> 
        </section>        
    );
}

export default Register;