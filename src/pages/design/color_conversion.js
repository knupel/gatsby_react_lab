import React from "react"
import Layout from "../../components/struct/layout"


import { rgb_to_filter, hex_to_rgb, get_css_value, name_to_hex } from "../../utils/h"


export default function ColorConversion() {
  const style = {
    height: `100px`,
    width: `100px`,
    background: get_css_value('--first_color'),
  }
  const hex_color = name_to_hex(get_css_value('--first_color'));
  const arr_col = hex_to_rgb(hex_color);
  if(arr_col !== null) {
    const result = rgb_to_filter(arr_col);
    const filter = result.filter;
    return (
      <div>
        <Layout title="Convert color : useful function()"></Layout>
        <h4>{"color from global css"}</h4>
        <div>{"get_css_value('--first_color') >>>"}  {get_css_value('--first_color')}</div>
        <div style={style}></div>
        <h4>Now convert name color to filter color:</h4>
        <div>{"convert name color to hex color use: name_to_hex(`magenta`) >>>"} {hex_color}</div>
        <div>{"hex_to_rgb(hex_color) >>> ["}{arr_col[0]}, {arr_col[1]}, {arr_col[2]}{"]"}</div>
        <div>{"rgb_to_filter(1, 0, 1) >>>"}</div>
        <div>filter: {filter}</div>
        <div style={{ height: `100px`,
                      width: `100px`,
                      background: 'black',
                      filter: filter}}></div>
        <div>{"loss < 1 is perfect"}</div>
        <div>{"loss 1 > 5 is ok"}</div>
        <div>{"loss 5 > 15 try again"}</div>
        <div>{"loss > 15 ohhh noooooo"}</div>
        <div>loss: {result.loss}</div>
        
      </div>
    )
  } else return <div><Layout title="Convert color : something wrong in the code, nothing happen"></Layout></div>
}
