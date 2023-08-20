import React from "react";

function Header({ setIsAdding }) {
  return (
    <div>
      <h1> Employee Management System </h1>{" "}
      <button class="btn btn-primary"
        onClick={() => {
          setIsAdding(true);
        }}
      >
        {" "}
        Add Employee{" "}
      </button>{" "}
    </div>
  );
}

export default Header;
