import Filho from "./Filho";

export default function Pai(props){
    return(
        <div>
            <Filho nome="Victor" familia={props.familia}/>
            <Filho nome="Tamires" familia={props.familia}/>
            <Filho {...props} nome="Leia"/>
        </div>
    )
}