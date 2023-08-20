import React, { useState } from "react";
import Swal from "sweetalert2";

import { employeesData } from "../../Data/data";
import Header from "./Header";
import Edit from "./Edit";
import Add from "./Add";
import List from "./List";

function Dashboard() {
  const [employees, setEmployee] = useState(employeesData);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const handleEdit = (id) => {
    const currEmployee = employees.filter((curr, index) => { return curr.id == id })
    setSelectedEmployee(currEmployee);
    setIsEditing(true);
    console.log(currEmployee);
  };

  const handleDelete = (id) => {
    setEmployee(employees.filter((curr, index) => { return curr.id != id }));
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Employee successfully deleted!',
      showConfirmButton: false,
      timer: 1500
    })
  };

  return (
    <div>
      {" "}
      {!isAdding && !isEditing && (
        <>
          <Header setIsAdding={setIsAdding} />{" "}
          <List
            employees={employees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          ></List>{" "}
        </>
      )}{" "}
      {isAdding && <Add employees={employees} setEmployee={setEmployee} setIsAdding={setIsAdding}> </Add>}{" "}
      {isEditing && <Edit employees={employees} setEmployee={setEmployee} setIsEditing={setIsEditing} selectedEmployee={selectedEmployee}> </Edit>}
    </div>
  );
}

export default Dashboard;
