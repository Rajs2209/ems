import React, { useState, useEffect, useRef } from "react";
import Login from "../Login";
import { Nav, NavDropdown } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Header({ employees, setIsAdding, setLoggedin, userInput, setUserInput, isAdmin, setIsAdmin }) {
  const [user, setUser] = useState(localStorage.getItem('username'));



  const navigate = useNavigate();
  const navi = (e) => {
    e.preventDefault();
    setLoggedin(false);
    localStorage.clear();
    navigate('/');
  }
  return (
    <div class="text-center">
      <h1 class="font-weight-bold">Employee Management System</h1>

      <div className="px-5 d-flex flex-column flex-md-row align-items-center" style={{ display: 'flex', justifyContent: 'space-between', color: 'blue' }}>
        <input className="my-2 my-md-0" placeholder="Search" value={userInput} onChange={(e) => { setUserInput(e.target.value) }}></input>
        {isAdmin == "true" ? <button class="btn btn-primary my-2 my-md-0" onClick={() => { setIsAdding(true) }}>Add Employee</button> : null}
        <Nav className="border border-primary my-2 my-md-0" >
          <NavDropdown title={user} >
            <NavDropdown.Item onClick={navi}>Log Out</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </div>
    </div>
  );
}

export default Header;
