/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import router from "next/router";

export default function rotas() {
  function navegacaoSimples(url) {
    return router.push(url);
  }

  function navegacaoComParams() {
    router.push({
      pathname: "/rotas/params",
      query: {
        id: 123,
        nome: "Victor",
      },
    });
  }

  return (
    <div>
      <h1>Rotas Index</h1>
      <Link href="/rotas/params?id=123&codigo=Victor">
        <button>Params</button>
      </Link>
      <Link href="/rotas/123/buscar">
        <button>Buscar</button>
      </Link>
      <Link href="/rotas/123/Victor">
        <button>Victor</button>
      </Link>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <button onClick={() => router.push("/rotas/123/buscar")}>Buscar</button>
        <button onClick={() => navegacaoSimples("/rotas/123/Victor")}>
          Victor
        </button>
        <button onClick={() => navegacaoComParams()}>Params</button>
      </div>
    </div>
  );
}
