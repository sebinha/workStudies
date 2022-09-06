import styles from "../styles/EntradaNumerica.module.scss";

interface EntradaNumericaProps {
  text: string;
  value: number;
  onChange: (newValue: number) => void;
}

export default function EntradaNumerica(props: EntradaNumericaProps) {
    const dec = () => props.onChange(props.value - 1)
    const enc = () => props.onChange(props.value + 1)

  return (
    <div className={styles.entradaNumerica}>
      <span className={styles.text}>{props.text}</span>
      <span className={styles.value}>{props.value}</span>
      <div className={styles.botoes}>
        <button onClick={dec} className={styles.btn}>-</button>
        <button onClick={enc} className={styles.btn}>+</button>
      </div>
    </div>
  );
}
