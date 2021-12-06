function NumerosMegaSena(qnt = 6, NumerosArray = []) {
  if (qnt < 6 || qnt > 60) {
    alert("Número inválido");
  }

  if (NumerosArray.length === qnt) {
    return NumerosArray;
  }

  let NumerosAleatorios = parseInt(Math.random() * 60) + 1;
  if (!NumerosArray.includes(NumerosAleatorios)) {
    return NumerosMegaSena(qnt, [...NumerosArray, NumerosAleatorios]);
  } else {
    return NumerosMegaSena(qnt, NumerosArray);
  }
}
console.log(NumerosMegaSena())
