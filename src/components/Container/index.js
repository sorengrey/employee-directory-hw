import React from "react";
import API from "../../utils/API";

function Container(props) {
  return <div className={`container${props.fluid ? "-fluid" : ""}`} {...props} />;
}

export default Container;
