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
    <div class="">
      <div class="font-weight-bold bg-dark text-light py-1 mb-3 text-left px-5 d-flex justify-content-between align-items-center d-flex flex-column flex-md-row ">
        <div className="d-flex flex-column flex-md-row align-items-center">
          <img src="/EMS_logo_PNG3.png" style={{ width: '100px', height: '8vh' }} />
          <div>
            <input className="my-2 my-md-0 mx-3" placeholder="Search" value={userInput} onChange={(e) => { setUserInput(e.target.value) }}></input>
          </div>
        </div>
        <div>
          <Nav className="border border-light text-light my-2 my-md-0 rounded-2" >
            <NavDropdown className="text-light" title={user} >
              <NavDropdown.Item>
                {isAdmin == "true" ? <button class="border-0 bg-white my-2 my-md-0" onClick={() => { setIsAdding(true) }}>Add Employee</button> : null}
              </NavDropdown.Item>
              <NavDropdown.Item ><button class="border-0 bg-white my-2 my-md-0" onClick={(e) => { navi(e) }}>Logout</button></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </div>
      </div>

      {/* <div className="px-5 d-flex flex-column flex-md-row align-items-center" style={{ display: 'flex', justifyContent: 'space-between', color: 'blue' }}>

      </div> */}
    </div>
  );
}

export default Header;
