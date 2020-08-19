import React ,{useState} from "react";
// import "./ColoredCircle.css";
import Circle from './Circle'
import ColoredButtons from './ColoredButtons'


function ColoredCircles(props) {
    let [circles, setCircles] = useState([]);

    const getRandom = (min = 0, max = 100) => {
        return Math.random() * max - min
    }

    const makeCircle = (color) => {
        setCircles(() => [...circles, {color, x:getRandom(), y:getRandom()}])
    }
    const changePosition = (idx) => {
        // setCircles(() => {
        //     let copy = [...circles]
        //     copy[idx].x = getRandom()
        //     copy[idx].y = getRandom()
        //     return copy
        // })
        // better way of doing this 👆🏾

        setCircles(circles => (
            circles.map((c, i) => (
                i === idx ?
                { ...c, x: getRandom(), y: getRandom() }
                :c
            ))
        ))
    }


  return (
      <>
          <ColoredButtons options = {['Darkgreen','teal','navy','pink', "Orange"]} handle={makeCircle}/>
          <ColoredButtons options = {["Violet", "Indigo", "Gold", "Cyan" ]} handle={makeCircle}/>
          <ColoredButtons options = {["Sienna", "Mistyrose", "Royalblue", "Sandybrown" ]} handle={makeCircle}/>



          <div>

              {circles.map(({ color, x, y }, i) => <Circle
                  key={i}
                  color={color}
                  x={x}
                  y={y}
                  idx={i}
                  handle={changePosition} />)}
          </div>


    </>
  );
}

export default ColoredCircles;
