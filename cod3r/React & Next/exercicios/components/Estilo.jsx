export default function Estilo(props) {
  return (
    <div>
      <h1
        style={{
          backgroundColor: props.numero >= 0 ? "green" : "red",
          color: props.color,
          textAlign: props.direita ? "right" : "left",
        }}
      >
        Teste
      </h1>
      <h2 className={props.numero >= 0 ? "amarelo" : "azul"}>
          Teste 02
      </h2>
    </div>
  );
}
