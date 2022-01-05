import PessoaTS from "../../components/Pessoa"

export default function(){
    return(
    <div>
        <h1>
            <PessoaTS nome="Victor" idade={22}/>
            <PessoaTS nome="Louise"/>
        </h1>
    </div>
    )
}