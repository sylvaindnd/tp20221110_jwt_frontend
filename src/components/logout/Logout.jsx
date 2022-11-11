import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useToken } from '../required/AuthProvider';

function Logout(){
    const navigate = useNavigate();
    const token = useToken();

    useEffect(()=>{
        clearStorage();
    }, [])

    function clearStorage(){
        token.deleteToken(); 
        navigate('/');
    }

    return (
        <></>
    );
}

export default Logout