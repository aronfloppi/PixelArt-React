import React, { Component, useState } from "react";
import Pixel from "./Pixel";
import Colors from "./Colors";

const Canvas = () => {
  const [matrix, setMatrix] = useState(
    Array(15)
      .fill()
      .map(() => Array(15).fill(0))
  );

  return (
    <div className={"canvas"}>
      {matrix.map((row, rowIndex) =>
        row.map((_, colIndex) => {
          return (
            <Pixel
              key={`${rowIndex}-${colIndex}`}
              background={Colors[matrix[rowIndex][colIndex]]}
            />
          );
        })
      )}
    </div>
  );
};

export default Canvas;
