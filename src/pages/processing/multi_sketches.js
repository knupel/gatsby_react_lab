import React from "react";
import { useState } from "react";

// site
import Layout from "../../components/layout";

// Processing
import P5Wrapper from "../../components/P5Wrapper";
import P5Manager from "../../components/P5Manager";
// import P5DispatchContext from "../../components/P5Wrapper";

const Dial_A_P5Wrapper = P5Wrapper("dialogue A");
const Dial_B_P5Wrapper = P5Wrapper("dialogue B");
const Dial_C_P5Wrapper = P5Wrapper("dialogue C");

export default function Multisketches() {
  return (
    <div>
      <div>
        <Layout title="Use fews sketches and pass data from React"></Layout>
      </div>
      <P5Manager>
        <Dialogue color="rouge" id={2} comp={Dial_A_P5Wrapper} />
        <Dialogue color="magenta" id={20} comp={Dial_B_P5Wrapper} />
        <Dialogue color="rouge" id={345} comp={Dial_C_P5Wrapper} />
      </P5Manager>
    </div>
  );
}

function Dialogue(props) {
  let buf_data = {
    str: "Je suis",
    colour: props.color,
    value: -1,
  };
  const [click, set_click] = useState(0);
  function mouse_click(event) {
    event.preventDefault();
    console.log("Dialogue ID", props.id);
    const i = click + 1;
    set_click(i);
  }

  const [state_data, set_data] = useState(buf_data);
  if (click !== state_data.value) {
    buf_data.colour = props.color;
    buf_data.value = click;
    set_data(buf_data);
  }
  return (
    <div onClick={mouse_click}>
      <props.comp
        sketch={my_sketch}
        id={props.id}
        data={state_data}
      ></props.comp>
    </div>
  );
}
/**
 *
 * Sketch Processing
 */
function my_sketch(p) {
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight / 4);

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight / 4);
    };
  };

  let str = "";
  let colour = "";
  p.draw = function () {
    set_colour();
    if (p.keyIsPressed) p.background(255, 0, 255);
    else if (colour.localeCompare("magenta") === 0) p.background(255, 0, 255);
    else if (colour.localeCompare("orange") === 0) p.background(255, 125, 0);
    else if (colour.localeCompare("jaune") === 0) p.background(255, 255, 0);
    else if (colour.localeCompare("vert") === 0) p.background(0, 255, 0);
    else if (colour.localeCompare("cyan") === 0) p.background(0, 255, 255);
    else if (colour.localeCompare("rouge") === 0) p.background(255, 0, 0);
    else if (colour.localeCompare("noir") === 0) {
      p.fill(255);
      p.background(0);
    } else p.background(255);
    let size = 80;

    p.textSize(size);
    p.text(str, 20, size);
  };

  function set_colour() {
    str = p.data.str + " " + p.data.colour + " " + p.data.value;
    if (typeof p.data.colour === "string") {
      colour = p.data.colour;
    }
  }
}
