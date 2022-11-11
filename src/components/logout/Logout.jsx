import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Logout(){
    const navigate = useNavigate();

    useEffect(()=>{
        clearStorage();
    }, []);

    function clearStorage(){
        window.localStorage.removeItem('token');
        navigate('/');
    }

    return (
        <></>
    );
}

export default Logout