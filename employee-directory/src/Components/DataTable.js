import React, { Component } from "react";
import DataBody from "./DataBody";
import SearchBox from "./SearchBox";
import API from "../Utils/API";

class DataTable extends Component {
  state = {
    result: [],
    alphabetical: "az",
  };

  componentDidMount() {
    this.userInfo();
  }

  userInfo = () => {
    API.getUsers()
      .then((res) => this.setState({ result: res.data.results }))
      .catch((err) => console.log(err));
  };

  render() {
    let sortedUsers;

    if (this.state.alphabetical === "az") {
      console.log("sort");
      sortedUsers = this.state.result.sort((a, b) =>
        a.name.last > b.name.last ? 1 : -1
      );
    } else {
      sortedUsers = this.state.result.sort((a, b) =>
        a.name.last < b.name.last ? 1 : -1
      );
    }

    return (
      <table className="table table-hover table-dark">
        <SearchBox />
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <DataBody result={this.state.result} />
      </table>
    );
  }
}

export default DataTable;
