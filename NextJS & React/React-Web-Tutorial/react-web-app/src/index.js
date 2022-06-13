import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Square = (props) => {
  return <button className="square">{props.value}</button>;
};
