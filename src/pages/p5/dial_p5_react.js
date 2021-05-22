import React from "react";
import { useState } from "react";
import { useContext } from "react";

// site
import Layout from "../../components/layout";

// Processing
import P5Wrapper from "../../components/p5_wrapper";
import P5Manager from "../../components/p5_manager";
import P5DispatchContext from "../../components/p5_wrapper";
import P5StateContext from "../../components/p5_manager";
import background from "./background";

export default function () {
  return (
    <div>
      <div>
        <Layout title="Dialogue between P5 and React"></Layout>
      </div>
      <P5Manager>
        <P5Comp />
      </P5Manager>
    </div>
  );
}

function P5Comp() {
  const [click, set_click] = useState(0);
  const dispatch = useContext(P5DispatchContext);

  function mouse_click(event) {
    event.preventDefault();
    const i = click + 1;
    set_click(i);
    console.log("P5Comp click", i);
    return dispatch => {
      dispatch({
        type: "SET_X",
        payload: +i,
      });
    };
  }
  return (
    <div onClick={mouse_click}>
      <Dialogue dial={click} />{" "}
    </div>
  );
}

const Dial_P5Wrapper = P5Wrapper("dialogue");

function Dialogue(props) {
  const [state_data, set_data] = useState("You talk to me ?", props.dial);
  const dispatch = useContext(P5DispatchContext);

  console.log("x", props.dial, state_data[1]);

  if (props.dial !== state_data[1]) {
    console.log("il y a du nouveau");
    set_data(["You click to me?\nClick and shut your mouse", props.dial]);
  }
  return (
    <Dial_P5Wrapper
      sketch={my_sketch}
      dispatch={dispatch}
      data={{ state_data }}
    ></Dial_P5Wrapper>
  );
}

/**
 *
 *
 * Sketch processing
 *
 *
 */
function my_sketch(p) {
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
  };

  let str = "";
  p.draw = function () {
    if (!p.keyIsPressed) p.background(255, 0, 0);
    else p.background(255, 0, 255);
    let size = 80;
    // console.log("p.data", p.data);
    p.textSize(size);
    // p.data.value
    // where the path data is set in the React part
    p.text(p.data[0] + p.data[1], 20, size);
  };
}
