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

      <Homelink link="/fullscreen/" name={"fullscreen"}></Homelink>

      <Homelink link="/grid/grid_image/" name={"grid images"}></Homelink>
      <Homelink
        link="/grid/grid_image_specific_folder/"
        name={"grid image from specific folder"}
      ></Homelink>
      <Homelink link="/grid/grid_button/" name={"grid button"}></Homelink>
      <Homelink
        link="/grid/grid_button_advanced/"
        name={"grid button advanced"}
      ></Homelink>

      <Homelink link="/image/image_direct/" name={"images direct"}></Homelink>
      <Homelink link="/image/image_fixed/" name={"images fixed"}></Homelink>
      <Homelink link="/image/image_fluid/" name={"images fluid"}></Homelink>
      <Homelink link="/image/image_multi/" name={"images multi"}></Homelink>

      <Homelink link="/video/video_basic/" name={"video basic"}></Homelink>
      <Homelink
        link="/video/video_fullscreen/"
        name={"video fullscreen"}
      ></Homelink>
      <Homelink link="/gui/side_bar/" name={"side bar"}></Homelink>
    </div>
  )
}
