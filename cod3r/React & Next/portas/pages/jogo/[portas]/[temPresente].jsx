import { useEffect, useState } from "react";
import Porta from "../../../components/Porta";
import { atualizarPortas, criarPortas } from "../../../functions/portas";
import styles from "../../../styles/Jogo.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Jogo() {
  const router = useRouter();
  const [portas, setPortas] = useState([]);
  const [valido, setValido] = useState(false);

  useEffect(() => {
    const portas = +router.query.portas;
    const temPresente = +router.query.temPresente;

    const qtdePortasValida = portas >= 3 && portas <= 100;
    const temPresenteValido = temPresente >= 1 && temPresente <= portas;
    setValido(qtdePortasValida && temPresenteValido);
  }, [router.query.portas, router.query.temPresente]);

  useEffect(() => {
    const portas = +router.query.portas;
    const temPresente = +router.query.temPresente;
    setPortas(criarPortas(portas, temPresente));
  }, [router?.query]);

  const renderizarPortas = () => {
    return portas.map((porta) => {
      return (
        <Porta
          key={porta.numero}
          value={porta}
          onChange={(novaPorta) =>
            setPortas(atualizarPortas(portas, novaPorta))
          }
        />
      );
    });
  };

  return (
    <div id={styles.jogo}>
      <div className={styles.portas}>{valido ? renderizarPortas() : <h1>Quantidade inválida</h1>}</div>
      <div className={styles.botoes}>
        <Link href="/">
          <button>Reiniciar</button>
        </Link>
      </div>
    </div>
  );
}
