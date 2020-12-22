import React from "react"
import { Menu_link } from "../components/menu_link"

function Menu_api() {
  return (
    <div>
      <Menu_link link="api/mongodb/" name={"API: mongo db"}></Menu_link>
      <Menu_link
        link="api/api_public/"
        name={"API: acces to public api with Axios"}
      ></Menu_link>
    </div>
  )
}

function Menu_design() {
  return (
    <Menu_link
      link="design/design_typo/"
      name={"DESIGN: choice typo typekit"}
    ></Menu_link>
  )
}

function Menu_framework() {
  return (
    <div>
      <Menu_link link="framework/p5/" name={"FRAMEWORK: P5js info"}></Menu_link>
    </div>
  )
}

function Menu_grid() {
  return (
    <div>
      {" "}
      <Menu_link link="/grid/grid_image/" name={"GRID: images"}></Menu_link>
      <Menu_link
        link="/grid/grid_image_diaporama/"
        name={"GRID: images selected to display in diaporama mode"}
      ></Menu_link>
      <Menu_link
        link="/grid/grid_image_specific_folder/"
        name={"GRID: image from specific folder"}
      ></Menu_link>
      <Menu_link link="/grid/grid_button/" name={"GRID: button"}></Menu_link>
      <Menu_link
        link="/grid/grid_button_advanced/"
        name={"GRID: button advanced"}
      ></Menu_link>
    </div>
  )
}

function Menu_gui() {
  return (
    <div>
      <Menu_link link="/gui/side_bar/" name={"GUI: side bar"}></Menu_link>
      <Menu_link link="gui/fullscreen/" name={"GUI: fullscreen"}></Menu_link>
      <Menu_link link="gui/form_class/" name={"GUI: form Class"}></Menu_link>
      <Menu_link link="gui/form_hook/" name={"GUI: form Hook"}></Menu_link>
      <Menu_link
        link="gui/mui_button_typekit_font/"
        name={"GUI: Mui button typekit font"}
      ></Menu_link>
      <Menu_link
        link="gui/mui_local_font/"
        name={"GUI: Mui local font"}
      ></Menu_link>
      <Menu_link
        link="gui/form_signup_hook/"
        name={"GUI: form signup Hook"}
      ></Menu_link>
      <Menu_link link="gui/contact/" name={"GUI: send me an email"}></Menu_link>
    </div>
  )
}

function Menu_image() {
  return (
    <div>
      <Menu_link
        link="/image/image_direct/"
        name={"IMG: images direct"}
      ></Menu_link>
      <Menu_link
        link="/image/image_fixed/"
        name={"IMG: images fixed"}
      ></Menu_link>
      <Menu_link
        link="/image/image_fluid/"
        name={"IMG: images fluid"}
      ></Menu_link>
      <Menu_link
        link="/image/image_multi/"
        name={"IMG: images multi"}
      ></Menu_link>
    </div>
  )
}

function Menu_video() {
  return (
    <div>
      <Menu_link link="/video/video_basic/" name={"VIDEO: basic"}></Menu_link>
      <Menu_link
        link="/video/video_fullscreen/"
        name={"VIDEO: fullscreen"}
      ></Menu_link>
    </div>
  )
}

export default function Menu() {
  let blabla =
    "Something from the Head Quarter Menu.js : use state={{ info: props.str }} in the Gatsby component Link and catch it with location.state.xxx!"
  return (
    <div>
      <Menu_link link="/container_test/" name={"container test"}></Menu_link>
      <Menu_link
        link="/link_location_state/"
        name={"pass data from menu link with component Gatsby Link"}
        str={blabla}
      ></Menu_link>
      <Menu_link link="/react_info/" name={"react info"}></Menu_link>

      <Menu_grid />
      <Menu_image />
      <Menu_video />
      <Menu_gui />
      <Menu_api />
      <Menu_design />
      <Menu_framework />
    </div>
  )
}
