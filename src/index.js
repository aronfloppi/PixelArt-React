import React from "react";
import ReactDOM from "react-dom";
import Pixel from "./components/Pixel";

import "./styles.css";
import Canvas from "./components/Canvas";

function App() {
  return (
    <div className="App">
      <Canvas />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
