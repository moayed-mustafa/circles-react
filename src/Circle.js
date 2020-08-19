import React from "react";
import "./Circle.css";

function Circle(props) {
  return (
    <div className="Circle"
      onClick={()=>props.handle(props.idx)}
      style={{
      backgroundColor: props.color,
      position: 'absolute',
      top:`${props.x}vh`,
      left:`${props.y}vw`
    }}>
      <h3> {props.idx + 1}</h3>
    </div>
  );
}

export default Circle;
