// Só funciona no build, dev não renderiza no tempo

export function getStaticProps() {
  return {
    revalidate: 10, // segundos
    props: { numero: Math.random() },
  };
}

export default function Estatico3(props) {
  return (
    <div>
      <h1>Estático #03</h1>
      <h2>{props.numero}</h2>
    </div>
  );
}
