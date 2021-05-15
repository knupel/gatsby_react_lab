import React from "react";
import { useState } from "react";

// site
import Layout from "../../components/layout";

// Processing
import P5Wrapper from "../../components/p5_wrapper";
import background from "./background";

export default function () {
  const [click, set_click] = useState(0);
  function mouse_click(event) {
    event.preventDefault();
    const i = click + 1;
    set_click(i);
  }

  return (
    <div>
      <div>
        <Layout title="Use fews sketches and pass data from React"></Layout>
      </div>
      <div>{dial_p5}</div>
      <div onClick={mouse_click}>
        <Dialogue color="rouge" id={2} dial={click} />
      </div>
      <div onClick={mouse_click}>
        <Dialogue color="magenta" id={20} dial={click} />
      </div>
      <div onClick={mouse_click}>
        <Dialogue color="rouge" id={345} dial={click} />
      </div>
    </div>
  );
}

var dial_p5;

function Dialogue(props) {
  const [data, set_data] = useState([]);
  if (props.dial !== data[2]) {
    set_data(["Je suis", props.color, props.dial]);
  }
  // console.log("Dialogue id", props.id);
  return <P5Wrapper sketch={my_sketch} id={props.id} data={data}></P5Wrapper>;
}

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

  p.set_data = function (data) {
    str = data[0] + " " + data[1] + " " + data[2];
    colour = data[1];
  };
}
