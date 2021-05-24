import React from "react";
import { useState } from "react";
import { useContext } from "react";

// site
import Layout from "../../components/layout";

// Processing
import P5Wrapper from "../../components/P5Wrapper";
import P5Manager from "../../components/P5Manager";
import P5DispatchContext from "../../components/P5Wrapper";

// const Dial_P5Wrapper = P5Wrapper("dialogue");

export default function () {
  // export default function DialP5React() {
  return (
    <div>
      <div>
        <Layout title="Dialogue between P5 and React"></Layout>
      </div>
      {/* <P5Manager>
        <P5Comp />
      </P5Manager> */}
    </div>
  );
}

/*
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

function Dialogue(props) {
  let buf_data = {
    title: "You talk to me ?",
    value: "Mister Number",
  };
  const [state_data, set_data] = useState(buf_data);
  const dispatch = useContext(P5DispatchContext);

  if (props.dial !== state_data.value) {
    buf_data.title = "Je suis ne pas un muméro";
    buf_data.value = props.dial;
    console.log("il y a du nouveau buf", buf_data);
    set_data(buf_data);
    console.log("il y a du nouveau state", state_data);
  }
  return (
    <Dial_P5Wrapper
      sketch={my_sketch}
      dispatch={dispatch}
      data={state_data}
    ></Dial_P5Wrapper>
  );
}


// Sketch processing
//
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
    p.text(p.data.title + " " + p.data.value, 20, size);
  };
}
*/
