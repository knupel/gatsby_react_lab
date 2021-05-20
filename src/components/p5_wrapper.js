/**
 * Gatsby-React P5 Wrapper v 0.0.1
 * 2021-2021
 *
 * Inspired
 * https://github.com/doubledherin/gatsby-p5-starter/blob/master/src/components/sketchWrapper.jsx
 * https://github.com/atorov/react-hooks-p5js
 *
 * v 0.0.1
 * 2021-2021
 */
import React from "react";
import { useRef, useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { memo } from "react";
// import { createContext, useContext } from "react";
import PropTypes from "prop-types";
import p5 from "p5";
import P5Manager from "./p5_manager";

import P5DispatchContext from "./p5_wrapper";
import P5StateContext from "./p5_manager";

// https://www.robinwieruch.de/react-derive-state-props
// https://kentcdodds.com/blog/how-to-use-react-context-effectively
// https://www.xspdf.com/resolution/53771877.html
// https://www.tutorialspoint.com/using-usecontext-in-react-js

export default function (id = "abc...xyz") {
  let env = null;

  function P5Wrapper({ sketch = () => {}, data = {}, dispatch = () => {} }) {
    const sketchContainer = useRef(null);

    useEffect(() => {
      env = new p5(sketch, sketchContainer.current);
      env.data = data;
      env.dispatch = dispatch;
      return () => {
        env.remove();
      };
    }, [dispatch, sketch, data]);

    return <div ref={sketchContainer}></div>;
  }

  P5Wrapper.propTypes = {
    data: PropTypes.object,
    dispatch: PropTypes.func,
    sketch: PropTypes.func,
  };

  P5Wrapper.defaultProps = {
    data: {},
    dispatch: () => {},
    sketch: () => {},
  };

  return memo(P5Wrapper, (_, nextProps) => {
    if (env) {
      env.data = { ...nextProps.data };
      return true;
    }
    return false;
  });
}

/**
 *
 *
 *
 *
 *
 */
// const P5Wrapper = props => {
//   const dispatch = useContext(P5DispatchContext);
//   const { sketch } = useContext(P5StateContext);

//   // let buf_sketch = null;
//   console.log("P5Manager", P5Manager);

//   let { sketches, set_sketches } = useContext(P5Manager);
//   function set_data() {}
//   const sketch_ref = useRef();

//   useEffect(() => {
//     sketch = new p5(props.sketch, sketch_ref.current);
//     if (sketch.set_data && props.data) {
//       sketch.set_data(props.data);
//     }
//     dispatch({ type: "USE_SKETCH", payload: sketch });
//     set_sketches(sketch);
//   }, []);

//   // update sketch from react
//   if (sketches) {
//     if (sketches.set_data && props.data) {
//       sketches.set_data(props.data);
//     }
//   }
//   return <div ref={sketch_ref} />;
// };

// P5Wrapper.propTypes = {
//   sketch: PropTypes.func.isRequired,
// };

// export default P5Wrapper;
/**
 *
 *
 *
 *
 *
 */
// const P5Wrapper = props => {
//   function set_data() {}
//   const sketch_ref = useRef();

//   let buf_sketch = null;
//   const [list_sketches, set_list_sketches] = useState([]);

//   useEffect(() => {
//     buf_sketch = new p5(props.sketch, sketch_ref.current);
//     let buf_list = list_sketches;
//     if (buf_sketch.set_data && props.data) {
//       buf_sketch.set_data(props.data);
//     }
//     let obj = {
//       id: props.id,
//       sketch: buf_sketch,
//     };
//     console.log("obj", obj);
//     console.log("0 list_sketches", list_sketches.length);
//     buf_list.push(obj);
//     console.log("1 list_sketches", list_sketches.length);
//     set_list_sketches(buf_list);
//   }, []);

//   // update sketch from react
//   // console.log("list_sketches", list_sketches.length);
//   if (list_sketches) {
//     list_sketches.map(elem => {
//       // console.log("elem.id", elem.id, "props.id", props.id);
//       // console.log("props.data", props.data);
//       // console.log("elem.sketch", elem.sketch);
//       if (elem.id === props.id) {
//         console.log("elem.id", elem.id, "props.id", props.id);
//       }
//       if (elem.id === props.id && elem.data && props.data) {
//         // console.log("elem.id", elem.id);
//         elem.set_data(props.data);
//       }
//     });
//     // if (list_sketches.set_data && props.data) {
//     //   list_sketches.set_data(props.data);
//     // }
//   }
//   return <div ref={sketch_ref} />;
// };

// P5Wrapper.propTypes = {
//   sketch: PropTypes.func.isRequired,
// };

// export default P5Wrapper;

// /**
//  *
//  *
//  *
//  *
//  *
//  */
// const P5Wrapper = props => {
//   function set_data() {}
//   const sketch_ref = useRef();

//   let buf_sketch = null;
//   const [list_sketches, set_list_sketches] = useState(null);

//   useEffect(() => {
//     buf_sketch = new p5(props.sketch, sketch_ref.current);
//     if (buf_sketch.set_data && props.data) {
//       buf_sketch.set_data(props.data);
//     }
//     set_list_sketches(buf_sketch);
//   }, []);

//   // update sketch from react
//   if (list_sketches) {
//     if (list_sketches.set_data && props.data) {
//       list_sketches.set_data(props.data);
//     }
//   }
//   return <div ref={sketch_ref} />;
// };

// P5Wrapper.propTypes = {
//   sketch: PropTypes.func.isRequired,
// };

// export default P5Wrapper;

// /**
//  *
//  *
//  *
//  *
//  *
//  */
// const P5Wrapper = props => {
//   function set_data() {}
//   const sketch_ref = useRef();

//   let buf_canvas = null;
//   const [canvas, set_canvas] = useState(null);

//   useEffect(() => {
//     buf_canvas = new p5(props.sketch, sketch_ref.current);
//     if (buf_canvas.set_data && props.data) {
//       buf_canvas.set_data(props.data);
//     }
//     set_canvas(buf_canvas);
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

/**
 *
 *
 *
 *
 *
 */
// let canvas = null;
// const P5Wrapper = props => {
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

/**
 *
 *
 *
 *
 *
 *
 *
 *
 */

// let canvas = null;
// let Canvas_context = createContext();
// let canvas_list = [];
// let canvas = null;
// export default function P5Wrapper(props) {
//   const [canvas_list, set_canvas_list] = useState([]);
//   // let canvas = null;
//   let add_is = true;
//   let index = 0;
//   if (canvas_list.length > 0) {
//     for (index = 0; index < canvas_list.length; index++) {
//       if (canvas_list[index][0] === props.id) {
//         // console.log("list id", canvas_list[index][0], "new id", props.id);
//         add_is = false;
//         break;
//       }
//     }
//   }
//   // add canvas
//   if (add_is) {
//     console.log("add canvas");
//     // canvas_list.push([props.id, null]); // problem is here
//     canvas_list.push([props.id, canvas]);
//     index = canvas_list.length - 1;
//   }
//   console.log("canvas_list[index][1] children", canvas_list[index][1]);
//   return (
//     <P5WrapperComp sketch={props.sketch} data={props.data}>
//       {canvas_list[index][1]}
//     </P5WrapperComp>
//   );
// }

// /**
//  *
//  *
//  *
//  *
//  *
//  */
// const P5WrapperComp = ({ children, ...props }) => {
//   console.log("0 children", children);
//   function set_data() {}
//   const sketch_ref = useRef();

//   // if (!children) {
//   //   children = new p5(props.sketch, sketch_ref.current);
//   //   console.log("1 children", children);
//   //   if (children.set_data && props.data) {
//   //     children.set_data(props.data);
//   //   }
//   // }

//   useEffect(() => {
//     children = new p5(props.sketch, sketch_ref.current);
//     console.log("1 children", children);
//     if (children.set_data && props.data) {
//       children.set_data(props.data);
//     }
//   }, []);

//   // update sketch from react
//   console.log("2 children", children);
//   if (children) {
//     if (children.set_data && props.data) {
//       children.set_data(props.data);
//     }
//   }
//   console.log("10 children", children);
//   return <div ref={sketch_ref} />;
// };

// P5WrapperComp.propTypes = {
//   sketch: PropTypes.func.isRequired,
// };
