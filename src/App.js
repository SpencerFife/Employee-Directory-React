import React from "react";
import "./App.css";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Wrapper>
        <Main />
      </Wrapper>
    </div>
  );
}

export default App;
