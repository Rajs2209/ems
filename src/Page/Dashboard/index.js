import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

import Header from "./Header";
import Edit from "./Edit";
import Add from "./Add";
import List from "./List";
import axios from "axios";

function Dashboard({ }) {
  const [employees, setEmployee] = useState([]);
  const [filteredEmployee, setFilteredEmployee] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [userInput, setUserInput] = new useState();
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isadmin'));
  const [field, setField] = useState();

  const filteredEmployees = () => {
    if (userInput == "") {
      setFilteredEmployee(employees);
      return;
    }
    let temp = [];
    temp = employees.filter((e) => { return (e.firstName.toLowerCase().includes(userInput.toLowerCase())) || e.lastName.toLowerCase().includes(userInput.toLowerCase()) || e.email.toLowerCase().includes(userInput.toLowerCase()) || e.salary == userInput || e.date == userInput })
    setFilteredEmployee(temp);

  }

  const getEmployee = async () => {
    try {
      const res = await axios.get("https://emsbackend.vercel.app/getemployee");
      console.log(res);
      setEmployee(res.data);
      setFilteredEmployee(res.data);
      let tempfield = [];
      let key;
      let employee;
      employee = res.data[0];
      for (key in employee) {
        if (key != "_id" && key != "id" && key != "isadmin") {
          tempfield.push(key);
        }
      }
      setField(tempfield);
    }
    catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getEmployee();
  }, [isAdding, isDeleted, isEditing])

  useEffect(() => {
    filteredEmployees();
  }, [userInput])

  const handleEdit = (id) => {
    const currEmployee = employees.filter((curr, index) => { return curr.id == id })
    setSelectedEmployee(currEmployee);
    setIsEditing(true);
    console.log(currEmployee);
  };

  const handleDelete = async (_id) => {

    const res = await axios.post("https://emsbackend.vercel.app/deleteemployee", { id: _id })
    if (res.data.message == "success") {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Employee successfully deleted!',
        showConfirmButton: false,
        timer: 1500
      })

      setIsDeleted(true);
    }
    else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Failed',
        showConfirmButton: false,
        timer: 1500
      })
    }

  };

  return (
    <div>
      {!isAdding && !isEditing && (
        <>
          <Header
            employees={filteredEmployee}
            setIsAdding={setIsAdding}
            userInput={userInput}
            setUserInput={setUserInput}
            isAdmin={isAdmin}
          />
          <List
            employees={filteredEmployee}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            isAdmin={isAdmin}
            field={field}
            setFilteredEmployee={setFilteredEmployee}
          ></List>
        </>
      )}
      {isAdding && <Add employees={employees} setEmployee={setEmployee} setIsAdding={setIsAdding}> </Add>}
      {isEditing && <Edit employees={employees} setEmployee={setEmployee} setIsEditing={setIsEditing} selectedEmployee={selectedEmployee}> </Edit>}
    </div>
  );
}

export default Dashboard;
