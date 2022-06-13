/* eslint-disable @next/next/link-passhref */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import { useRouter } from "next/router";

export default function nomeECodigo() {
    const router = useRouter()
    const codigo = router.query.codigo
    const nome = router.query.nome

    console.log(router)

  return (
    <div>
      <h1>Rotas / {codigo} / {nome}</h1>
      <Link href="/rotas">
        <button>Voltar</button>
      </Link>
    </div>
  );
}
