import React from "react"
import { Homelink } from "../components/menu_link"

export default function Menu() {
  return (
    <div>
      <Homelink link="/about/" name={"about"}></Homelink>
      <Homelink link="/react_info/" name={"react info"}></Homelink>
      <Homelink link="/image_direct/" name={"images direct"}></Homelink>
      <Homelink link="/image_fixed/" name={"images fixed"}></Homelink>
      <Homelink link="/image_fluid/" name={"images fluid"}></Homelink>
      <Homelink link="/image_multi/" name={"images multi"}></Homelink>
      <Homelink link="/image_grid/" name={"images grid"}></Homelink>
      <Homelink
        link="/image_grid_specific_folder/"
        name={"images grid from specific folder"}
      ></Homelink>
      <Homelink link="/video_basic/" name={"video basic"}></Homelink>
      <Homelink link="/video_fullscreen/" name={"video fullscreen"}></Homelink>
      <Homelink link="/side_bar/" name={"side bar"}></Homelink>
    </div>
  )
}
