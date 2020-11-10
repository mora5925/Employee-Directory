import React from "react";
import Wrapper from "./Components/Wrapper";
import Main from "./Components/Main";
import Header from "./Components/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
    </div>
  );
}

export default App;
