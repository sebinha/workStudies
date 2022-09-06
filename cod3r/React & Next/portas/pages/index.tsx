import Cartao from "../components/Cartao";
import Link from "next/link";
import styles from "../styles/Formulario.module.scss";
import EntradaNumerica from "../components/EntradaNumerica";
import { useState } from "react";

export default function Formulario() {
  const [qtdePortas, setQtdePortas] = useState(3);
  const [temPresente, setTemPresente] = useState(1);

  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor="#c0392c">
          <h2>Monty Hall</h2>
        </Cartao>
        <Cartao>
          <EntradaNumerica
            text="Qtde de portas"
            value={qtdePortas}
            onChange={(novaQtde) => setQtdePortas(novaQtde)}
          />
        </Cartao>
      </div>
      <div>
        <Cartao>
          {" "}
          <EntradaNumerica
            text="Porta com presente"
            value={temPresente}
            onChange={(novaQtde) => setTemPresente(novaQtde)}
          />
        </Cartao>
        <Cartao bgcolor="#28a085">
          <Link href={`/jogo/${qtdePortas}/${temPresente}`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  );
}
