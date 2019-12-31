import React, { useState } from "react";
import ReactDOM from "react-dom";
import Pixel from "./components/Pixel";

import "./styles.css";
import Canvas from "./components/Canvas";
import ColorPicker from "./components/ColorPicker";

function App() {
  let localColor = localStorage.getItem("color");
  if (localColor !== null) {
    localColor = JSON.parse(localColor);
  } else {
    localColor = 0;
  }
  const [color, setColor] = useState(localColor);

  return (
    <div className="App">
      <ColorPicker
        currentColor={color}
        setColor={newColor => {
          setColor(newColor);
          localStorage.setItem("color", newColor);
        }}
      />
      <Canvas currentColor={color} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
