export function getStaticProps(){
    return{
        props:{
            numero: Math.random()
        }
    }
}

export default function Estatico(props){
    return(
        <>
            <span>Aleatório: {props.numero}</span>
        </>
    )
}