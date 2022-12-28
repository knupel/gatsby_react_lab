/**
 * REACT INFO
 * 2021-2022
 * v 0.2.1
 * 
*/
import React from "react"
import { useState, useEffect, useRef } from "react";
import Layout from "../../components/struct/layout"
import { GetWindow } from "../../utils/canvas"

function ReactInfo() {
  const ref = useRef(null);
  let res = GetWindow();

	const [pos_div, set_pos_div] = useState({x:0,y:0});

  const get_position = () => {
    if(ref.current !== null) {
      set_pos_div({x: ref.current.offsetLeft, y: ref.current.offsetTop});
    }
  };

	useEffect(() => {
    get_position();
  }, []);

	useEffect(() => {
    window.addEventListener("resize", get_position);
  }, []);
  console.log("res", res);

  return (
    <div>
      <Layout title="REACT INFO"></Layout>
      <div  style={{display: "flex"}}>
        <div ref={ref} style={{width: "250px"}}>
          window is {res.width} x {res.height} 
        </div>
        <div ref={ref} >div position is {pos_div.x} x {pos_div.y}</div>
      </div>
    </div>
  )
}

export default ReactInfo
