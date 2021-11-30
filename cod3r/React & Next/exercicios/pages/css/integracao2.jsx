import styles from "./integracao2.module.css";

export default function integracao2() {
  return (
    <div id={styles.integracao2}>
      <div className={styles.vermelho}>Texto#1</div>
      <div className={styles.azul}>Texto#2</div>
      <div className={styles.branco}>Texto#3</div>
    </div>
  );
}