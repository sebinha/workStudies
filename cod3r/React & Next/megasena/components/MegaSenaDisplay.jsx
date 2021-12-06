export default function MegaSenaDisplay(props){
    return (
        <div
          style={{
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            height: "100px",
            width: "100px",
            borderRadius: "50px",
            backgroundColor: "black",
            color: "white",
            fontSize:"2rem"
          }}
        >
          {props.display}
        </div>
      );
}