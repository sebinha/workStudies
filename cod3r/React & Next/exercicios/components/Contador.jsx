import { useState } from "react";
import ContadorDisplay from "./ContadorDisplay";

export default function Contador(props) {
  const [x, setX] = useState(0);

  const subtraction = () => setX(x - 1);

  function addition() {
    setX(x + 1);
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>Contador</h1>
      <ContadorDisplay x={x}/>
      <br />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button onClick={subtraction}>-</button>
        <button onClick={addition}>+</button>
      </div>
    </div>
  );
}
