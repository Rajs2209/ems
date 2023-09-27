import React from "react";

function List({ employees, handleEdit, handleDelete, isAdmin }) {
  return (

    <div class="px-md-5" style={{ width: '100%', overflow: 'scroll' }}>
      <table class="table my-3">
        <thead>
          <tr class="table-danger">

            <th> Index </th> <th> Firstname </th> <th> Lastname </th>
            <th> Email </th> <th> Salary </th> <th> Date </th>
            {isAdmin == "true" ? <th colSpan={2}> Action </th> : null}
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map(({ _id, id, firstName, lastName, email, salary, date }, index) => {
              return (
                <tr class={index % 2 == 0 ? '' : 'table-primary'}>
                  <td> {index + 1}</td> <td> {firstName} </td>
                  <td> {lastName} </td> <td> {email} </td> <td> {salary} </td>
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
  );
}

export default List;
