import React, { useState, useEffect, createContext, useContext } from 'react';

const AuthContext = createContext();

export default function AuthProvider(props){
    const [token, setToken] = useState(null);

    useEffect(()=>{        
        localStorage.getItem('token') ? setToken(localStorage.getItem('token')) : setToken(null);
    }, [])

    function updateToken(t){
        localStorage.setItem('token', t);
        setToken(t);
    }

    function deleteToken(){
        localStorage.removeItem('token');
        setToken(null);
    }

    const value = { token, updateToken, deleteToken }

    return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
}

export function useToken(){
    return useContext(AuthContext);
}