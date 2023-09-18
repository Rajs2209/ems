import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Dashboard from "./Page/Dashboard/index";
import Signup from "./Page/Signup";
import Login from "./Page/Login";
import React, { useState } from 'react'

function App() {

  const [loggedin, setLoggedin] = useState(false);
  return (

    <Routes>
      <Route path="/" element={<Login setLoggedin={setLoggedin} />} />
      {localStorage.getItem('isloggedin') && <Route path="/dashboard" element={<Dashboard setLoggedin={setLoggedin} />} />}

      <Route path="/signup" element={<Signup />} />

    </Routes>
  );
}

export default App;
