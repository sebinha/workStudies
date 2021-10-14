// string
let nome: string = 'João'
console.log(nome)
// nome = 10

// numbers
let idade: number = 22
// idade = 'victor'
idade = 22.2
console.log(idade)

// boolean

let verdadeiro: boolean = false
// verdadeiro = 1
console.log(verdadeiro)

//arrays

let hobbies: any[] = ["Jogar","Ver séries"]
console.log(hobbies[0])
hobbies = [1,2,3]
console.log(hobbies)

let endereco: [string, number, string] =  ["Rua do Retorno", 11, "Saída 5"]
console.log(endereco)

endereco = ["Rua Grande", 123, ""]
console.log(endereco)

// enums

enum Cor{
    Cinza,
    Preto,
    Vermelho = 10,
    Rosa = 2,
    Verde = 10
}

console.log(Cor)
console.log(Cor.Vermelho, Cor.Verde)

// any

let carro: any = ["porsche", 2011]
console.log(carro)

carro = { marca: "porsche", ano:2011}
console.log(carro)