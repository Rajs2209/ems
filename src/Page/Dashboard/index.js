import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

import Header from "./Header";
import Edit from "./Edit";
import Add from "./Add";
import List from "./List";
import axios from "axios";

function Dashboard() {
  const [employees, setEmployee] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const getEmployee = async () => {
    try {
      const res = await axios.get("http://localhost:5000/getemployee");
      // console.log(res);
      setEmployee(res.data);
    }
    catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getEmployee();
  }, [isAdding, isDeleted, isEditing])
  const handleEdit = (id) => {
    const currEmployee = employees.filter((curr, index) => { return curr.id == id })
    setSelectedEmployee(currEmployee);
    setIsEditing(true);
    console.log(currEmployee);
  };

  const handleDelete = async (_id) => {

    const res = await axios.post("http://localhost:5000/deleteemployee", { id: _id })
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
          <Header setIsAdding={setIsAdding} />{" "}
          <List
            employees={employees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          ></List>
        </>
      )}
      {isAdding && <Add employees={employees} setEmployee={setEmployee} setIsAdding={setIsAdding}> </Add>}{" "}
      {isEditing && <Edit employees={employees} setEmployee={setEmployee} setIsEditing={setIsEditing} selectedEmployee={selectedEmployee}> </Edit>}
    </div>
  );
}

export default Dashboard;
