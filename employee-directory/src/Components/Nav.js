import React from "react";
import SearchBox from "./SearchBox";

function Nav() {
  return (
    <nav
      className="navbar navbar-expand navbar-dark bg-dark"
      style={{ display: "inline-block", width: "100%" }}
    >
      <div>
        <SearchBox />
      </div>
    </nav>
  );
}

export default Nav;
