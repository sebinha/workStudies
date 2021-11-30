import Filho from "./Filho";

export default function Pai(props){

    function falarComigo(...args){
        console.log(args)
    }
    return (
        <div>
            <Filho funcao={falarComigo}/>
        </div>
    )
}