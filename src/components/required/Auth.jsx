import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useToken } from './AuthProvider';


function Auth(props){
    const token = useToken();

    return(<>
        { token.token ? (props.children) : (<div className='requiredAuth'>Access forbidden, you need to be<Link to="/">login</Link>.</div>)}
    </>);
}   

export default Auth;