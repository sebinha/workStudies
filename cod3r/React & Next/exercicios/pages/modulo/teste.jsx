import Default, {Comp1, Comp2, Comp4, Comp5, Comp6} from "../../components/modulo/funcionais"

export default function teste(){
    return (
        <div>
            <Comp1/>
            <Comp2/>
            <Default/>
            <Comp4/>
            <Comp5/>
            <Comp6 msg={"Testando func"}/>
        </div>
    )
}