export default function lista1() {
  return (
    <div>
      <ul>
        <span>1,</span>
        <span>2,</span>
        <span>3,</span>
        <span>4,</span>
        <span>5,</span>
        <span>6,</span>
        <span>7,</span>
        <span>8,</span>
        <span>9,</span>
        <span>10,</span>
      </ul>
      <div>{listaSpan(10)}</div>
    </div>
  );

  function listaSpan(quantidade) {
      let lista = []
    for (let i = 1; i <= quantidade; i++) {
      lista.push(<span>{i},</span>)
    }
    return lista
  }
}
