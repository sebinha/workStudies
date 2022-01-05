import { useEffect, useState } from "react";
import { ContadorDisplay } from "../../components/ContadorDisplay";
import { NumerosMegaSena } from "../../../megasena/components/NumerosMegaSena";

export default function Mega() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [qntde, setQntde] = useState(6);
  const [numeros, setNumeros] = useState([]);

  useEffect(() => {
    setNumeros(NumerosMegaSena());
  }, []);

  function renderNumeros() {
    return numeros.map((numero) => (
      <ContadorDisplay key={numero} display={numero} />
    ));
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Mega Sena</h1>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {renderNumeros()}
      </div>
      <div>
        <input
          type="number"
          min="6"
          max="20"
          value={qntde}
          onChange={(ev) => setQntde(ev.target.value)}
        />
        <button onClick={() => setNumeros(NumerosMegaSena(qntde))}>
          Gerar aposta
        </button>
      </div>
    </div>
  );
}
