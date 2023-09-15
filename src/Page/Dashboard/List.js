import React from "react";

function List({ employees, handleEdit, handleDelete }) {
  return (
    <div class="px-5">
      {" "}
      <table class="table my-3">
        <thead>
          <tr class="table-danger">
            {" "}
            <th> id </th> <th> firstname </th> <th> lastname </th>{" "}
            <th> email </th> <th> salary </th> <th> date </th>{" "}
            <th colSpan={2}> Action </th>{" "}
          </tr>{" "}
        </thead>{" "}
        <tbody>
          {employees.length > 0 ? (
            employees.map(({ _id, id, firstName, lastName, email, salary, date }, index) => {
              return (
                <tr class={index % 2 == 0 ? '' : 'table-primary'}>
                  <td> {index + 1}</td> <td> {firstName} </td>
                  <td> {lastName} </td> <td> {email} </td> <td> {salary} </td>{" "}
                  <td> {date} </td>{" "}
                  <td>
                    {" "}
                    <button class="btn btn-success"
                      onClick={() => {
                        handleEdit(id);
                      }}
                    >
                      {" "}
                      Edit{" "}
                    </button>{" "}
                  </td>{" "}
                  <td>
                    {" "}
                    <button class="btn btn-danger"
                      onClick={() => {
                        handleDelete(_id);
                      }}
                    >
                      {" "}
                      Delete{" "}
                    </button>{" "}
                  </td>{" "}
                </tr>
              );
            })
          ) : (<tr><td colSpan={7}>Employee Data not available</td></tr>)}
        </tbody>
      </table>{" "}
    </div>
  );
}

export default List;
