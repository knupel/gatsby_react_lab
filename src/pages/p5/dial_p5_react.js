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
        <Layout title="Dialogue between P5 and React"></Layout>
      </div>
      <div>{dial_p5}</div>
      <div onClick={mouse_click}>
        <Dialogue dial={click} />
      </div>
    </div>
  );
}

var dial_p5;

function Dialogue(props) {
  const [data, set_data] = useState("You talk to me ?", props.dial);
  if (props.dial !== data[1]) {
    set_data(["You click to me?\nClick and shut your mouse", props.dial]);
  }
  return <P5Wrapper sketch={my_sketch} data={data}></P5Wrapper>;
}

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

    p.textSize(size);
    p.text(str, 20, size);
  };

  p.set_data = function (data) {
    str = data[0] + "\n" + data[1];
  };
}
