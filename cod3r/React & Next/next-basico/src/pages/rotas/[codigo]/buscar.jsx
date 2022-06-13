/* eslint-disable @next/next/link-passhref */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import { useRouter } from "next/router";

export default function buscar() {
    const router = useRouter()
    const codigo = router.query.codigo

    console.log(router)

  return (
    <div>
      <h1>Rotas / {codigo} / Buscar</h1>
      <Link href="/rotas">
        <button>Voltar</button>
      </Link>
    </div>
  );
}
