import React from "react";

function List({ employees, handleEdit, handleDelete, isAdmin }) {
  return (

    <div class="px-2 px-md-3 table-responsive py-2">
      <table class="table table-bordered table-hover text-center">
        <thead class="thead-dark">
          <tr class="table-danger">

            <th scope="col"> Index </th> <th scope="col"> Firstname </th> <th scope="col"> Lastname </th>
            <th scope="col"> Email </th> <th scope="col"> Salary </th> <th scope="col"> Date </th>
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
  );
}

export default List;
