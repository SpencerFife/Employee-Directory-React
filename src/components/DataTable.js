import React from "react";
import moment from "moment";

function DataTable(props) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((results, index) => (
            <tr key={index}>
              <td>
                <img src={results.picture.large} alt="employeePic" />
              </td>
              <td>
                {results.name.first} {results.name.last}
              </td>
              <td>{results.email}</td>
              <td>{moment(results.dob.date).format("MM-DD-YYYY")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
