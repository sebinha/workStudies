"use strict";
// Interface
function saudarComOla(pessoa) {
    return "Ol\u00E1 " + pessoa.nome + "!";
}
function mudarNome(pessoa) {
    pessoa.nome = "Victoria";
}
var pessoa = {
    nome: "Victor",
    idade: 22,
    saudar: function (sobrenome) {
        console.log("Ol\u00E1 eu me chamo " + this.nome + " " + sobrenome);
    }
};
console.log(saudarComOla(pessoa));
mudarNome(pessoa);
console.log(saudarComOla(pessoa));
// console.log(saudarComOla({nome: "Adilson", idade: 35, altura: 1.82, peso: '50kg'}))
pessoa.saudar("Vader");
// Classes com Interface
var Cliente = /** @class */ (function () {
    function Cliente() {
        this.nome = "";
        this.ultimaCompra = new Date;
    }
    Cliente.prototype.saudar = function (sobrenome) {
        console.log("Ol\u00E1, " + this.nome + " " + sobrenome);
    };
    return Cliente;
}());
var meuCliente = new Cliente();
meuCliente.nome = "Darth";
console.log(saudarComOla(meuCliente));
meuCliente.saudar("Vader");
console.log(meuCliente.ultimaCompra);
var potencia;
potencia = function (base, exp) {
    return Math.pow(base, exp);
};
console.log(potencia(2, 6));
