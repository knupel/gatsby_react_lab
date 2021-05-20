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
  const [click, set_click] = useState(0);
  const dispatch = useContext(P5DispatchContext);

  function mouse_click(event) {
    // const { x } = useContext(P5StateContext);
    event.preventDefault();
    const i = click + 1;
    set_click(i);
    return i =>
      dispatch({
        type: "SET_X",
        payload: +i,
      });
  }

  /**
   * dispach il doit être là ????
   * Donc il faut déporte le Manager
   */

  return (
    <div>
      <div>
        <Layout title="Dialogue between P5 and React"></Layout>
      </div>
      <P5Manager>
        <div onClick={mouse_click}>{/* <Dialogue dial={click} /> */}</div>
      </P5Manager>
    </div>
  );
}

const Dial_P5Wrapper = P5Wrapper("dialogue");

function Dialogue(props) {
  // const [state_data, set_data] = useState("You talk to me ?", props.dial);
  // const [state_data, set_data] = useState("You talk to me ?", props.dial);
  const dispatch = useContext(P5DispatchContext);
  // const { data, my_sketch } = useContext(P5StateContext);
  /**
   * Firefox : TypeError : _context undefined
   * Chrome : TypeError: Cannot read property 'value' of undefined
   */
  // const { data } = useContext(P5StateContext);
  console.log("x", props.dial);
  // const { x } = useContext(P5StateContext);
  // console.log("x", x);

  // if (props.dial !== data.value) {
  //   console.log("il y a du nouveau");
  //   set_data(["You click to me?\nClick and shut your mouse", props.dial]);
  //   return props.dial =>
  //     dispatch({
  //       type: "SET_DATA",
  //       payload: +value,
  //     });
  // }
  // console.log("Je suis state_data", data.value);
  // console.log("Je suis data", data);
  return (
    <Dial_P5Wrapper
      sketch={my_sketch}
      dispatch={dispatch}
      // data={{ props.dial }}
    ></Dial_P5Wrapper>
  );
}

// const Dial_P5Wrapper = P5Wrapper("dialogue");

// function Dialogue(props) {
//   const [state_data, set_data] = useState("You talk to me ?", props.dial);
//   const dispatch = useContext(P5DispatchContext);
//   // const { data, my_sketch } = useContext(P5StateContext);

//   // const { data, my_sketch } = useContext(P5StateContext);
//   if (props.dial !== state_data[1]) {
//     console.log("il y a du nouveau");
//     set_data(["You click to me?\nClick and shut your mouse", props.dial]);
//     // return state_data =>
//     //   dispatch({
//     //     type: "SET_DATA",
//     //     payload: +state_data,
//     //   });
//   }
//   console.log("Je suis là", state_data);
//   return (
//     <Dial_P5Wrapper
//       sketch={my_sketch}
//       data={{ state_data }}
//       dispatch={dispatch}
//     ></Dial_P5Wrapper>
//   );
// }
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

    p.textSize(size);
    // p.data.value
    // where the path data is set in the React part
    p.text(p.data.value, 20, size);
  };

  // p.set_data = function (data) {
  //   str = data[0] + "\n" + data[1];
  // };
}
