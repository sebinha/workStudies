import { useState } from "react";

export default function Mouse() {
  const [x, setX] = useState(0);

  const arrayY = useState(0);
  let y = arrayY[0];
  const alterarY = arrayY[1];

  function quandoMover(e) {
    setX(e.clientX);
    alterarY(e.clientY);
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "lightgrey",
      }}
      onMouseMoveCapture={quandoMover}
    >
      <h1>Eixo X: {x}</h1>
      <h1>Eixo Y: {y}</h1>
    </div>
  );
}
