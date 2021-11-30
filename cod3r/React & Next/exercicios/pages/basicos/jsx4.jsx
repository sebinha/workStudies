export default function jsx4(){
    const subtitulo = 'Bem vindo ao JavaScript';
    const trechoH3 = <h3>{3 * 3}</h3>

    return(
        <div>
            <h1>Integração JS e JSX</h1>
            <h2>{subtitulo}</h2>
            {trechoH3}
            <h4>{entre(100*Math.random(),100*Math.random(),100*Math.random())}</h4>
            <h5>{100*Math.random()}</h5>
        </div>
    )
    function entre(valor, min, max){
        if (valor >= min && valor <= max){
            return `Sim, ${valor}`
        } else {
            return `Não, ${valor}`
        }
    }
}