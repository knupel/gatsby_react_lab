import React from "react"
import { Homelink } from "../components/menu_link"

export default function Menu() {
  let blabla =
    "Something from the Head Quarter Menu.js : use state={{ info: props.str }} in the Gatsby component Link and ctach it with location.state.xxx!"
  return (
    <div>
      <Homelink link="/container_test/" name={"container test"}></Homelink>
      <Homelink
        link="/link_location_state/"
        name={"pass data from menu link with component Gatsby Link"}
        str={blabla}
      ></Homelink>
      <Homelink link="/react_info/" name={"react info"}></Homelink>

      <Homelink link="/grid/grid_image/" name={"GRID: images"}></Homelink>
      <Homelink
        link="/grid/grid_image_specific_folder/"
        name={"GRID: image from specific folder"}
      ></Homelink>
      <Homelink link="/grid/grid_button/" name={"GRID: button"}></Homelink>
      <Homelink
        link="/grid/grid_button_advanced/"
        name={"GRID: button advanced"}
      ></Homelink>

      <Homelink
        link="/image/image_direct/"
        name={"IMG: images direct"}
      ></Homelink>
      <Homelink
        link="/image/image_fixed/"
        name={"IMG: images fixed"}
      ></Homelink>
      <Homelink
        link="/image/image_fluid/"
        name={"IMG: images fluid"}
      ></Homelink>
      <Homelink
        link="/image/image_multi/"
        name={"IMG: images multi"}
      ></Homelink>

      <Homelink link="/video/video_basic/" name={"VIDEO: basic"}></Homelink>
      <Homelink
        link="/video/video_fullscreen/"
        name={"VIDEO: fullscreen"}
      ></Homelink>
      <Homelink link="/gui/side_bar/" name={"GUI: side bar"}></Homelink>
      <Homelink link="gui/fullscreen/" name={"GUI: fullscreen"}></Homelink>
    </div>
  )
}
