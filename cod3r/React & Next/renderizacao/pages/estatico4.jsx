// Só funciona no build, dev não renderiza no tempo

export async function getStaticProps() {
    console.log('[Server] Renderizando no servidor')
  const resp = await fetch("http://localhost:3000/api/produtos");
  const produtos = await resp.json();
  return {
    props: { produtos },
  };
}

export default function Estatico4(props) {
console.log('[Cliente] Renderizando no cliente')
  const renderizarProdutos = () => {
    return props.produtos.map((produto) => {
      return (
        <li key={produto.id}>
          {produto.nome} tem o preço de {produto.preco}
        </li>
      );
    });
  };

  return (
    <div>
      <h1>Estático #04</h1>
      <ul>{renderizarProdutos()}</ul>
    </div>
  );
}
