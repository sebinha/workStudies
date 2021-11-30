export default function SomentePar(props){
    
    const numeroPar = props.numero %2 === 0 
    return (
        <div>
            {numeroPar ? <h2>{props.numero}</h2> : null}
        </div>
    )
    
    // return (props.numero %2 === 0 ? <h2>{props.numero}</h2> : null)


    // if (props.numero % 2 === 0){
    //     return (<h1>{props.numero}</h1>)
    // } else {
    //     return null
    // }
}