import React, { useState } from "react";
import Swal from "sweetalert2";
function Add({ employees, setEmployee, setIsAdding }) {

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [salary, setSalary] = useState();
    const [date, setDate] = useState();


    const handleAdd = (event) => {
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
            id: employees.length + 1,
            firstName: firstName,
            lastName: lastName,
            email: email,
            salary: salary,
            date: date
        }

        let temp = [];
        temp = [...employees, newEmployee];
        setEmployee(temp);

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Employee Successfully Added!',
            showConfirmButton: false,
            timer: 1500
        })

        setIsAdding(false);
    }
    return (
        <div className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
            <form onSubmit={(event) => { handleAdd(event) }} className="d-flex flex-column p-5 border border-2 border-primary rounded" >
                <div className="d-flex flex-row my-2">
                    <label className="mx-2 w-25"> Firstname </label> <input id="firstName" name="firstName" value={firstName} onChange={(event) => { setFirstName(event.target.value) }} />
                </div>
                <div className="d-flex flex-row my-2"><label className="mx-2 w-25"> Lastname </label> <input id="lastName" name="lastName" value={lastName} onChange={(event) => { setLastName(event.target.value) }} /></div>
                <div className="d-flex flex-row my-2"><label className="mx-2 w-25"> Email </label> <input id="email" name="email" value={email} onChange={(event) => { setEmail(event.target.value) }} /></div>
                <div className="d-flex flex-row my-2"><label className="mx-2 w-25"> Salary </label> <input id="salary" name="salary" value={salary} onChange={(event) => { setSalary(event.target.value) }} /></div>
                <div className="d-flex flex-row my-2"><label className="mx-2 w-25"> Date </label> <input type="date" id="date" name="date" value={date} onChange={(event) => { setDate(event.target.value) }} /></div>
                <div className="d-flex flex-row mt-4 d-flex justify-content-center"><input id="submit" name="submit" type="submit" class="btn btn-primary" /></div>
            </form >
        </div>
    );
}

export default Add;