"use strict";
// string
var nome = 'João';
console.log(nome);
// nome = 10
// numbers
var idade = 22;
// idade = 'victor'
idade = 22.2;
console.log(idade);
// boolean
var verdadeiro = false;
// verdadeiro = 1
console.log(verdadeiro);
//arrays
var hobbies = ["Jogar", "Ver séries"];
console.log(hobbies[0]);
hobbies = [1, 2, 3];
console.log(hobbies);
var endereco = ["Rua do Retorno", 11, "Saída 5"];
console.log(endereco);
endereco = ["Rua Grande", 123, ""];
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Preto"] = 1] = "Preto";
    Cor[Cor["Vermelho"] = 10] = "Vermelho";
    Cor[Cor["Rosa"] = 2] = "Rosa";
    Cor[Cor["Verde"] = 10] = "Verde";
})(Cor || (Cor = {}));
console.log(Cor);
console.log(Cor.Vermelho, Cor.Verde);
// any
var carro = ["porsche", 2011];
console.log(carro);
carro = { marca: "porsche", ano: 2011 };
console.log(carro);
