import React from "react";

function EmployeeInput(props) {
  return (
    <div className="form-group">
      <label htmlFor="firstName">Enter the employee's first name here.</label>
      <input
        className="form-control"
        value={props.firstName}
        name="firstName"
        onChange={props.handleNameChange}
        type="text"
        placeholder="First Name"
      />
      <label htmlFor="dob">Sort the employees by Date of Birth</label>
      <select onChange={props.handleDateChange} id="sort">
        <option value="ascending">Sort by Ascending</option>
        <option value="decending">Sort by Descending</option>
      </select>
    </div>
  );
}

export default EmployeeInput;
