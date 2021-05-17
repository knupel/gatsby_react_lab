import React from "react";
import { useState } from "react";

// site
import Layout from "../../components/layout";

// Processing
import P5Wrapper from "../../components/p5_wrapper";
import P5Manager from "../../components/p5_manager";
import background from "./background";

export default function () {
  return (
    <div>
      <div>
        <Layout title="Use fews sketches and pass data from React"></Layout>
      </div>
      <P5Manager>
        <Dialogue color="rouge" id={2} />
      </P5Manager>
      <P5Manager>
        <Dialogue color="magenta" id={20} />
      </P5Manager>
      <P5Manager>
        <Dialogue color="rouge" id={345} />
      </P5Manager>
    </div>
  );
}

function Dialogue(props) {
  const [click, set_click] = useState(0);
  function mouse_click(event) {
    event.preventDefault();
    const i = click + 1;
    set_click(i);
  }

  const [data, set_data] = useState([]);
  if (click !== data[2]) {
    set_data(["Je suis", props.color, click]);
  }
  return (
    <div onClick={mouse_click}>
      <P5Wrapper sketch={my_sketch} id={props.id} data={data}></P5Wrapper>
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
    if (typeof data[1] === "string") {
      colour = data[1];
    }
  };
}
