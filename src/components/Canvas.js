import React, { Component, useState } from "react";
import Pixel from "./Pixel";
import Colors from "./Colors";
import _ from "lodash";

const Canvas = props => {
  let localMatrix = localStorage.getItem("matrix");

  const theMatrix = localMatrix
    ? JSON.parse(localMatrix)
    : Array(15)
        .fill()
        .map(() => Array(15).fill(0));

  const [matrix, setMatrix] = useState(theMatrix);

  const changeColor = (rowIndex, colIndex) => {
    const newMatrix = JSON.parse(JSON.stringify(matrix));
    newMatrix[rowIndex][colIndex] = props.currentColor;
    localStorage.setItem("matrix", JSON.stringify(newMatrix));
    setMatrix(newMatrix);
  };

  return (
    <div className={"canvas"}>
      {matrix.map((row, rowIndex) =>
        row.map((_, colIndex) => {
          return (
            <Pixel
              key={`${rowIndex}-${colIndex}`}
              background={Colors[matrix[rowIndex][colIndex]]}
              onClick={e => changeColor(rowIndex, colIndex)}
            />
          );
        })
      )}
    </div>
  );
};

export default Canvas;
