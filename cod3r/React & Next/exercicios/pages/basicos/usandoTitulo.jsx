import Titulo from "../../components/Titulo";

export default function usandoTitulo() {
  return (
    <>
      <Titulo
        principal="Página de Cadastro"
        secundario="Incluir, alterar e excluir conteúdo"
      />
      <Titulo
        principal="Página de login"
        secundario="Informe seu email e senha"
        pequeno
      />
    </>
  );
}
