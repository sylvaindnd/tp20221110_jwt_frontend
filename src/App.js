import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Nav from './components/nav/Nav';
import Logout from './components/logout/Logout';
import Posts from './components/posts/Posts'

function App() {
  return (
    <>
      <Nav />
      <Routes>

        <Route path="/" element={<Login />}></Route>
        <Route path="/register/" element={<Register />}></Route>
        <Route path="/logout/" element={<Logout />}></Route>
        <Route path="/posts/" element={<Posts />}></Route>

      </Routes>
    </>
  );
}

export default App;
