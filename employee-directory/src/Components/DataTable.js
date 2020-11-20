  
import React, { Component } from "react";
import DataBody from "./DataBody";
import Nav from "./Nav";
import API from "../Utils/API";

class DataTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alphabetical: "az",
      result: [],
      resultSort: [],
      search: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
    const search = event.target.value;
    const foundEmployees = this.state.result.filter((name) => {
      let values = name.name.first.toLowerCase();
      return values.indexOf(search.toLowerCase()) !== -1;
    });

    this.setState({ resultSort: foundEmployees });
  };

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  componentDidMount() {
    this.userInfo();
  }

  userInfo = () => {
    API.getUsers()
      .then((res) => this.setState({ result: res.data.results }))
      .catch((err) => console.log(err));
  };

  resultsOrSearched = () => {
    if (this.state.search !== "") {
      return (
        <DataBody sortByName={this.sortByName} result={this.state.resultSort} />
      );
    } else {
      return (
        <DataBody sortByName={this.sortByName} result={this.state.result} />
      );
    }
  };

  render() {
    let sortedUsers;

    if (this.state.alphabetical === "az") {
      sortedUsers = this.state.result.sort((a, b) =>
        a.name.last > b.name.last ? 1 : -1
      );
    } else {
      // eslint-disable-next-line no-unused-vars
      sortedUsers = this.state.result.sort((a, b) =>
        a.name.last < b.name.last ? 1 : -1
      );
    }

    return (
      <div>
        <Nav handleInputChange={this.handleInputChange} />
        <table className="table table-hover table-dark">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">
                <select
                  name="alphabetical"
                  value={this.state.alphabetical}
                  onChange={this.handleChange}
                  className={"btn btn-outline-light"}
                >
                  <option selected value="az">
                    A to Z
                  </option>
                  <option value="za">Z to A</option>
                </select>
              </th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">DOB</th>
            </tr>
          </thead>
          {this.resultsOrSearched()};
        </table>
      </div>
    );
  }
}

export default DataTable;
