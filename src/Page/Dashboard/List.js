import React, { useEffect, useState } from "react";

function List({ employees, setFilteredEmployee, handleEdit, handleDelete, isAdmin, field }) {
  const [sortasc, setsortasc] = useState(new Array(5).fill(true));

  const sortbyasc = (sortBy) => {
    let sorted = [...employees];

    sorted.sort((a, b) => {
      let x;
      let y;

      if (sortBy == "salary") {
        x = Number(a[sortBy]);
        y = Number(b[sortBy]);
      }
      else if (sortBy == "date") {
        x = new Date(a[sortBy]);
        y = new Date(b[sortBy]);
      }
      else {
        x = a[sortBy];
        y = b[sortBy];
      }

      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
    setFilteredEmployee(sorted);
  }

  const sortbydsc = (sortBy) => {
    let sorted = [...employees];


    sorted.sort((a, b) => {

      let x;
      let y;

      if (sortBy == "salary") {
        x = Number(a[sortBy]);
        y = Number(b[sortBy]);
      }
      else if (sortBy == "date") {
        x = new Date(a[sortBy]);
        y = new Date(b[sortBy]);
      }
      else {
        x = a[sortBy];
        y = b[sortBy];
      }

      if (x > y) {
        return -1;
      }
      if (x < y) {
        return 1;
      }
      return 0;
    });
    setFilteredEmployee(sorted);
  }


  const sorting = (e) => {
    const index = e.target.value;
    const sortBy = field[index];

    if (sortasc[index] == true) {
      sortbyasc(sortBy);
      let temp = [...sortasc];
      temp[index] = false;
      setsortasc(temp);
    } else {
      sortbydsc(sortBy);
      let temp = [...sortasc];
      temp[index] = true;
      setsortasc(temp);
    }
    document.getElementById('select').value = -1;
  };

  return (
    <div>
      <div>
        <select class=" ms-3 px-2 py-2" id="select" onChange={(e) => { sorting(e) }}>
          <option selected value="-1">Sort by</option>
          {field && field.map((key, index) => {
            return <option value={index} className="d-flex justify-content-between" >
              <p>{key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()}</p>
            </option>
          })}
        </select>
      </div>

      <div class="px-2 px-md-3 table-responsive py-2">
        <table class="table table-bordered table-hover text-center">
          <thead class="thead-dark">
            <tr class="table-danger">

              <th scope="col"> Index </th> <th scope="col"> Firstname {sortasc[0] ? "↑" : "↓"}</th> <th scope="col"> Lastname {sortasc[1] ? "↑" : "↓"} </th>
              <th scope="col"> Email {sortasc[2] ? "↑" : "↓"} </th> <th scope="col"> Salary {sortasc[3] ? "↑" : "↓"}</th> <th scope="col"> Date {sortasc[4] ? "↑" : "↓"}</th>
              {isAdmin == "true" ? <th scope="col" colSpan={2}> Action </th> : null}
            </tr>
          </thead>
          <tbody>
            {employees.length > 0 ? (
              employees.map(({ _id, id, firstName, lastName, email, salary, date }, index) => {
                return (
                  <tr class={index % 2 == 0 ? '' : 'table-primary'}>
                    <td> {index + 1}</td> <td> {firstName} </td>
                    <td> {lastName} </td> <td> <a className="text-black" href={`mailto:${email}`}>{email}</a> </td> <td> ₹{salary} </td>
                    <td> {date} </td>
                    {isAdmin == "true" ? <td>

                      <button class="btn btn-success"
                        onClick={() => {
                          handleEdit(id);
                        }}
                      >

                        Edit
                      </button>
                    </td> : null}
                    {isAdmin == "true" ? <td>

                      <button class="btn btn-danger"
                        onClick={() => {
                          handleDelete(_id);
                        }}
                      >

                        Delete
                      </button>
                    </td> : null}
                  </tr>
                );
              })
            ) : (<tr><td colSpan={7}>Employee Data not available</td></tr>)}
          </tbody>
        </table>
      </div>
    </div>

  );
}

export default List;
