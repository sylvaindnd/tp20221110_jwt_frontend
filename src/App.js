import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Nav from './components/nav/Nav';

function App() {
  return (
    <>
      <Nav />
      <Routes>

        <Route path="/" element={<Login />}></Route>
        <Route path="/register/" element={<Register />}></Route>

      </Routes>
    </>
  );
}

export default App;
