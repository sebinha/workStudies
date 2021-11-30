import Casas from "./Casas";

export default function Linha(props){
    return(
        <div        
        style={{display: 'flex',
        flexDirection: props.invertido ? "row-reverse" : "none"}}>
        <Casas />
        <Casas preto />
        <Casas />
        <Casas preto />
        <Casas />
        <Casas preto />
        <Casas />
        <Casas preto />
        </div>
    )
}