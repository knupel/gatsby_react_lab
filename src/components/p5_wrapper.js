/**
 * Inspired from Wendy Dherin
 * @see https://github.com/doubledherin/gatsby-p5-starter/blob/master/src/components/sketchWrapper.jsx
 *
 * v 0.1.0
 * 2021-2021
 */
import React from "react";
import { useRef, useEffect } from "react";
import { useState } from "react";
import { createContext, useContext } from "react";
import PropTypes from "prop-types";
import p5 from "p5";
// le probleme c'est que cela limite à un seul sketch ???

// let canvas = null;
// let Canvas_context = createContext();
let canvas_list = [];
export default function P5Wrapper(props) {
  let canvas = null;
  let add_is = true;
  let index = 0;
  if (canvas_list.length > 0) {
    for (index = 0; index < canvas_list.length; index++) {
      console.log("index", index, "id", props.id);
      if (canvas_list[index][0] === props.id) {
        add_is = false;
        break;
      }
    }
  }
  if (add_is) {
    canvas_list.push([props.id, canvas]);
    index = canvas_list.length - 1;
  }
  console.log("canvas list length", canvas_list.length);
  return (
    <P5WrapperComp sketch={props.sketch} data={props.data}>
      {canvas_list[index][1]}
    </P5WrapperComp>
  );
}

const P5WrapperComp = ({ children, ...props }) => {
  console.log("P5WrapperComp", children);
  function set_data() {}
  const sketch_ref = useRef();

  useEffect(() => {
    children = new p5(props.sketch, sketch_ref.current);
    if (children.set_data && props.data) {
      children.set_data(props.data);
    }
  }, []);

  // update sketch from react
  if (children) {
    if (children.set_data && props.data) {
      children.set_data(props.data);
    }
  }

  return <div ref={sketch_ref} />;
};

P5WrapperComp.propTypes = {
  sketch: PropTypes.func.isRequired,
};

// export default P5Wrapper;

// let canvas = null;
// const P5Wrapper = props => {

//   // use canvas
//   function set_data() {}
//   const sketch_ref = useRef();

//   useEffect(() => {
//     canvas = new p5(props.sketch, sketch_ref.current);
//     if (canvas.set_data && props.data) {
//       canvas.set_data(props.data);
//     }
//   }, []);

//   // update sketch from react
//   if (canvas) {
//     if (canvas.set_data && props.data) {
//       canvas.set_data(props.data);
//     }
//   }

//   return <div ref={sketch_ref} />;
// };

// P5Wrapper.propTypes = {
//   sketch: PropTypes.func.isRequired,
// };

// export default P5Wrapper;
