// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const numeroAleatório = (min = 1, max = 100000) => {
    return parseInt(Math.random() * (max - min)) + min;
  };

  res.status(200).json([
    { id: numeroAleatório(), nome: "Caneta", preco: 3.4 },
    { id: numeroAleatório(), nome: "Caderno", preco: 10.5 },
    { id: numeroAleatório(), nome: "Lápis", preco: 2.2 },
    { id: numeroAleatório(), nome: "Tesoura", preco: 7.0 },
  ]);
}
