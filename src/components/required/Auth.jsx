import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function getToken(){
    if(!window.localStorage.getItem('token')){
        return false;
    }
    return true;
}

function Auth(props){
    return(<>
        { getToken() ? (props.children) : (<div className='requiredAuth'>Access forbidden, you need to be<Link to="/">login</Link>.</div>)}
    </>);
}   

export default Auth;