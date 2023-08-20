import React, { useState } from "react";
import Swal from "sweetalert2";
function Edit({ employees, setEmployee, setIsEditing, selectedEmployee }) {

  const [firstName, setFirstName] = useState(selectedEmployee[0].firstName);
  const [lastName, setLastName] = useState(selectedEmployee[0].lastName);
  const [email, setEmail] = useState(selectedEmployee[0].email);
  const [salary, setSalary] = useState(selectedEmployee[0].salary);
  const [date, setDate] = useState(selectedEmployee[0].date);

  const handleEdit = (event) => {
    event.preventDefault();

    if (!firstName || !lastName || !email || !salary || !date) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Field cannot be empty!',
        showConfirmButton: false,
        timer: 1500
      })
      return;
    }

    const newEmployee = {
      id: selectedEmployee[0].id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      salary: salary,
      date: date
    }

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Successfully Edited',
      showConfirmButton: false,
      timer: 1500
    })

    employees.splice(selectedEmployee[0].id, 1, newEmployee);
    setEmployee(employees);

    setIsEditing(false);
  }
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <form onSubmit={(event) => { handleEdit(event) }} className="d-flex flex-column p-5 border border-2 border-success rounded" >
        <div className="d-flex flex-row my-2">
          <label className="mx-2 w-25"> Firstname </label> <input id="firstName" name="firstName" value={firstName} onChange={(event) => { setFirstName(event.target.value) }} />
        </div>
        <div className="d-flex flex-row my-2"><label className="mx-2 w-25"> Lastname </label> <input id="lastName" name="lastName" value={lastName} onChange={(event) => { setLastName(event.target.value) }} /></div>
        <div className="d-flex flex-row my-2"><label className="mx-2 w-25"> Email </label> <input id="email" name="email" value={email} onChange={(event) => { setEmail(event.target.value) }} /></div>
        <div className="d-flex flex-row my-2"><label className="mx-2 w-25"> Salary </label> <input id="salary" name="salary" value={salary} onChange={(event) => { setSalary(event.target.value) }} /></div>
        <div className="d-flex flex-row my-2"><label className="mx-2 w-25"> Date </label> <input type="date" id="date" name="date" value={date} onChange={(event) => { setDate(event.target.value) }} /></div>
        <div className="d-flex flex-row mt-4 d-flex justify-content-center"><input id="submit" name="submit" type="submit" class="btn btn-success" /></div>
      </form >
    </div>
  )
}

export default Edit;