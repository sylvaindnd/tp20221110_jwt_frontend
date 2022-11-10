import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Nav from './components/nav/Nav';

function App() {
  return (
    <>
      <Nav />
      <Routes>

        <Route path="/" element={<Login />}></Route>

      </Routes>
    </>
  );
}

export default App;
