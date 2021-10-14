// Interface

interface Humano{
    nome: string,
    idade?: number,
    [prop:string]: any
    saudar(sobrenome:string): void
}

function saudarComOla(pessoa: Humano){
    return `Olá ${pessoa.nome}!`
}

function mudarNome(pessoa: Humano){
    pessoa.nome="Victoria"
}

const pessoa: Humano = {
    nome: "Victor",
    idade: 22,
    saudar(sobrenome:string){
        console.log(`Olá eu me chamo ${this.nome} ${sobrenome}`)
    }
}

console.log(saudarComOla(pessoa))
mudarNome(pessoa)
console.log(saudarComOla(pessoa))
// console.log(saudarComOla({nome: "Adilson", idade: 35, altura: 1.82, peso: '50kg'}))

pessoa.saudar("Vader")

// Classes com Interface

class Cliente implements Humano{
    nome:string = ""
    ultimaCompra: Date = new Date
    saudar(sobrenome:string){
        console.log(`Olá, ${this.nome} ${sobrenome}`)
    }
}

const meuCliente = new Cliente()
meuCliente.nome = "Darth"
console.log(saudarComOla(meuCliente))
meuCliente.saudar("Vader")
console.log(meuCliente.ultimaCompra)

// Interface Função

interface FuncaoCalculo{
    (numeroA:number, numeroB: number): number
}

let potencia: FuncaoCalculo

potencia =  function(base:number, exp:number):number{
    return Math.pow(base, exp)
}

console.log(potencia(2,6))