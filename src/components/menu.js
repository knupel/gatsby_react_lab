import React from "react"
import { Homelink } from "../components/menu_link"

export default function Menu() {
  let blabla =
    "Something from the Head Quarter Menu.js : use state={{ info: props.str }} in the Gatsby component Link and ctach it with location.state.xxx!"
  return (
    <div>
      <Homelink link="/about/" name={"about"}></Homelink>
      <Homelink
        link="/link_location_state/"
        name={"pass data from menu link with component Gatsby Link"}
        str={blabla}
      ></Homelink>
      <Homelink link="/react_info/" name={"react info"}></Homelink>
      <Homelink link="/image_direct/" name={"images direct"}></Homelink>
      <Homelink link="/image_fixed/" name={"images fixed"}></Homelink>
      <Homelink link="/image_fluid/" name={"images fluid"}></Homelink>
      <Homelink link="/image_multi/" name={"images multi"}></Homelink>
      <Homelink link="/fullscreen/" name={"fullscreen"}></Homelink>
      <Homelink link="/grid_image/" name={"grid images"}></Homelink>
      <Homelink
        link="/grid_image_specific_folder/"
        name={"grid image from specific folder"}
      ></Homelink>
      <Homelink link="/grid_button/" name={"grid button"}></Homelink>
      <Homelink link="/video_basic/" name={"video basic"}></Homelink>
      <Homelink link="/video_fullscreen/" name={"video fullscreen"}></Homelink>
      <Homelink link="/side_bar/" name={"side bar"}></Homelink>
    </div>
  )
}
