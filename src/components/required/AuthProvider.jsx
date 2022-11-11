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

    function isAdmin(){
        if(!token){
            return false;
        }

        const parseJwt = ()=> {
            var base64 = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
            var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
        
            return JSON.parse(jsonPayload);
        }

        return parseJwt().role === 1 ? false : true;
    }

    const value = { token, updateToken, deleteToken, isAdmin }

    return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
}

export function useToken(){
    return useContext(AuthContext);
}