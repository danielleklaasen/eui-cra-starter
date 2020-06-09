import React from "react";
import logo from "./logo.svg";
import "./App.scss";

import { EuiButton } from "@elastic/eui";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <br/>
        <EuiButton
          fill
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </EuiButton>
      </header>
    </div>
  );
}

export default App;
