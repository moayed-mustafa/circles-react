import React from "react";
// import "./ColoredCircle.css";


function ColoredButtons({options, handle}) {



  return (
      <>
    <div>
              {options.map(c => (
                  <button
                        style={{ backgroundColor: c, color: "white" }}
                        onClick={() => handle(c)}>{`${c} circle`}
                  </button>
              ))}
    </div>
    </>
  );
}

export default ColoredButtons;
