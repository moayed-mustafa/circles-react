import React ,{useState} from "react";
// import "./ColoredCircle.css";
import Circle from './Circle'
import ColoredButtons from './ColoredButtons'


function ColoredCircles(props) {
    let [colors, setColors] = useState(["Violet", "Indigo", "Gold", "Cyan", "Sienna", "Mistyrose", "Royalblue", "Sandybrown"]);

    const makeCircle = (color) => {
        setColors(() => [...colors, color])
    }


  return (
      <>
          <ColoredButtons options = {['Darkgreen','teal','navy','pink', "Orange", "Sienna"]} handle={makeCircle}/>
          <ColoredButtons options = {[ "Mistyrose", "Royalblue", "Sandybrown"]} handle={makeCircle}/>
          <ColoredButtons options = {["Violet", "Indigo", "Gold", "Cyan" ]} handle={makeCircle}/>
          <ColoredButtons options = {["Sienna", "Mistyrose", "Royalblue", "Sandybrown" ]} handle={makeCircle}/>



          <div>

              {colors.map((c, i) => <Circle key={i} color={c} idx={i} />)}
          </div>


    </>
  );
}

export default ColoredCircles;
