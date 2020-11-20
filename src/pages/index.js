import React from "react"

import Header from "../components/header"
import { Homelink } from "../components/menu_link"
// add this external link in the future
// https://archive.org/
export default function Home() {
  return (
    <div style={{ color: `red`, fontSize: `18px` }}>
      <Header str="STAN LE PUNK LABO" />
      <Homelink link="/about/" name={"about"}></Homelink>
      <Homelink link="/react_info/" name={"react info"}></Homelink>
      <Homelink link="/image_direct/" name={"images direct"}></Homelink>
      <Homelink link="/image_query/" name={"images query"}></Homelink>
      <Homelink link="/image_fluid/" name={"images fluid"}></Homelink>
      <Homelink link="/image_multi/" name={"images multi"}></Homelink>
      <Homelink link="/image_grid/" name={"images grid"}></Homelink>
      <Homelink
        link="/image_grid_specific_folder/"
        name={"images grid from specific folder"}
      ></Homelink>
      <Homelink link="/video_basic/" name={"video basic"}></Homelink>
      <Homelink link="/video_fullscreen/" name={"video fullscreen"}></Homelink>
    </div>
  )
}
