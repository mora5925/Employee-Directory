import React from "react";

function SearchBox(props) {
  return (
    <form className="search form-inline" style={{ display: "inline-flex" }}>
      <div className="form-group">
        <input
          onChange={props.handleInputChange}
          value={props.result}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for an employee"
          id="search"
          style={{ width: "500px" }}
        />
        <button
          onClick={props.handleFormSubmit}
          className="btn btn-outline-light"
          style={{ marginLeft: "10px" }}
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBox;
