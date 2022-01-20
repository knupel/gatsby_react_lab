import React from "react";

// site
import Layout from "../../components/layout";
// Processing
import P5Wrapper from "../../components/P5Wrapper";

const BG = P5Wrapper("background");

export default function NoDialJustP5() {
  return (
    <div>
      <div style={{ position: "absolute" }}>
        <P5Background />
      </div>
      <div style={{ position: "absolute" }}>
        <Layout title="simple background in P5"></Layout>
      </div>
    </div>
  );
}


function P5Background() {
  return <BG sketch={my_sketch}></BG>;
}

function my_sketch(p) {
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSB, 1, 1, 1, 1);

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
  };

  p.draw = function () {
    let hue = p.abs(p.sin(p.frameCount * 0.001));
    p.background(hue, 1, 1);
  };
}
