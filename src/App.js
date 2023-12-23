import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Dashboard from "./Page/Dashboard/index";
import Signup from "./Page/Signup";
import Login from "./Page/Login";
import React, { useState } from 'react'

function App() {

  return (

    <Routes>
      <Route path="/" element={<Login />} />

      {localStorage.getItem('isloggedin') && <Route path="/dashboard" element={<Dashboard />} />}

      <Route path="/signup" element={<Signup />} />

    </Routes>
  );
}

export default App;
