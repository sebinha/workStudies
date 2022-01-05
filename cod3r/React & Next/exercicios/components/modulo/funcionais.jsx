/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/display-name */
export function Comp1() {
  return <h1>Comp1</h1>;
}

export const Comp2 = function () {
  return <h1>Comp2</h1>;
};

export default function ( ) {
  return (
    <div>
      <h2>Comp3</h2>
    </div>
  );
};

export const Comp4 = ( ) => {
    return(
        <h1>Comp4</h1>
    )
}

const Comp5 = () => <h1>Comp5</h1>

const Comp6 = props => {
    return <h1>Comp6 - {props.msg}</h1>
}

export{
    Comp5, Comp6
}
