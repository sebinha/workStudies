export async function getStaticPaths() {
  const resp = await fetch("http://localhost:3000/api/alunos/tutores");
  const tutores = await resp.json();

  const paths = tutores.map((id) => {
    return { params: { id: `${id}` } };
  });

  return {
    fallback: true, // 404
    paths,
  };
}

export async function getStaticProps({ params }) {
  const resp = await fetch(`http://localhost:3000/api/alunos/${params.id}`);
  const aluno = await resp.json();
  return { props: { aluno } };
}

export default function AlunosPorId(props) {
  const { aluno } = props;

  return (
    <div>
      <h1>Identidade do aluno</h1>
      {aluno ? (
        <ul>
          <li>{aluno.id}</li>
          <li>{aluno.nome}</li>
          <li>{aluno.email}</li>
        </ul>
      ) : (
        false
      )}
    </div>
  );
}
