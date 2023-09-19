import React, { useState, useEffect, useRef } from "react";
import Login from "../Login";
import { Nav, NavDropdown } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Header({ setIsAdding, setLoggedin }) {
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
      <button class="btn btn-primary" onClick={() => { setIsAdding(true) }}>Add Employee</button>
      <Nav style={{ display: 'flex', justifyContent: 'right', color: 'blue' }}>
        <NavDropdown title={user} >
          <NavDropdown.Item onClick={navi}>Log Out</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </div>
  );
}

export default Header;
