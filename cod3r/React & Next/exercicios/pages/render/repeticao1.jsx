export default function repeticao1(){
    const listaDeAprovados = [
        'Lucas',
        'Gabriela',
        'João',
        'Maria',
        'Julia',
        'Roberto',
        'Felipe',
        'George',
    ]
        function retornaLista(){
            return listaDeAprovados.map((aprovados, i) => {
                return (<li key={i}>{aprovados}</li>)
            })
        }
    
    return(
        retornaLista()
        )
    }
    // function retornaLista(){
    //     const itens = []

    //     for (let i = 0; i < listaDeAprovados.length; i++) {
    //         itens.push(<li key={i}>{listaDeAprovados[i]}</li>)
    //     }

    //     return itens
    // }