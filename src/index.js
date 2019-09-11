import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import DottedAndCopy from "./dottedAndCopy";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <DottedAndCopy
        text="Start editing to see some magic happen!"
        width={100}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
