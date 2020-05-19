import React from "react";
import API from "../utils/API";
import EmployeeInput from "./EmployeeInput";
import DataTable from "./DataTable";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: ``,
      results: [],
      filteredResults: [],
    };
  }

  componentDidMount() {
    this.searchEmployees();
  }

  searchEmployees() {
    API.search().then((results) => {
      this.setState({
        results: results.data.results,
        filteredResults: results.data.results,
      }).catch((err) => console.error(err));
    });
  }
  handleNameChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const filteredResults = this.state.results.filter((result) => {
      return result.name.first.toLowerCase().includes(value.toLowerCase());
    });
    this.setState({
      [name]: value,
      filteredResults,
    });
  };
  handleDateChange = (event) => {
    const value = event.target.value;
    let sortedResults = [];

    if (value === "ascending") {
      sortedResults = [...this.state.filteredResults].sort(
        (a, b) => a.dob.date.slice(5, 7) - b.dob.date.slice(5, 7)
      );
    } else {
      sortedResults = [...this.state.filteredResults].sort(
        (a, b) => b.dob.date.slice(5, 7) - a.dob.date.slice(5, 7)
      );
    }
    this.setState({
      filteredResults: sortedResults,
    });
  };

  render() {
    return (
      <div>
        <EmployeeInput
          firstName={this.state.firstName}
          handleDateChange={this.handleDateChange}
          handleNameChange={this.handleNameChange}
        />

        <DataTable
          results={this.state.filteredResults}
          search={this.state.search}
        />
      </div>
    );
  }
}

export default SearchResults;
