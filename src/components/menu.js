import React from "react";
import { Menu_link } from "../components/menu_link";

function Menu_api() {
  return (
    <div>
      <Menu_link link="api/mongodb/" name={"API: mongo db"}></Menu_link>
      <Menu_link
        link="api/api_public/"
        name={"API: acces to public api with Axios"}
      ></Menu_link>
    </div>
  );
}

function Menu_design() {
  return (
    <Menu_link
      link="design/design_typo/"
      name={"DESIGN: choice typo typekit"}
    ></Menu_link>
  );
}

function Menu_grid() {
  return (
    <div>
      {" "}
      <Menu_link link="/grid/grid_image/" name={"GRID: images"}></Menu_link>
      <Menu_link
        link="/grid/grid_image_radio/"
        name={"GRID: selected like a radio system"}
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
  );
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
  );
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
  );
}

function Menu_misc() {
  let blabla =
    "Something from the Head Quarter Menu.js : use state={{ info: props.str }} in the Gatsby component Link and catch it with location.state.xxx!";
  return (
    <div>
      <Menu_link
        link="/misc/link_utils/"
        name={"MISC: fews interesting externals links"}
      ></Menu_link>
      <Menu_link
        link="/misc/container_test/"
        name={"MISC: container test"}
      ></Menu_link>
      <Menu_link
        link="/misc/link_location_state/"
        name={"MISC: pass data from menu link with component Gatsby Link"}
        str={blabla}
      ></Menu_link>
      <Menu_link link="/misc/react_info/" name={"MISC: react info"}></Menu_link>
      <Menu_link
        link="/misc/context_reducer/"
        name={"MISC: use reducer, context and dispatch"}
      ></Menu_link>
    </div>
  );
}

function Menu_p5() {
  return (
    <div>
      <Menu_link
        link="/processing/no_dial_just_processing/"
        name={
          "P5 JS: No dialogue between react and P5 JS, just show the sketch"
        }
      ></Menu_link>
      <Menu_link
        link="/processing/dial_processing_react/"
        name={"P5 JS: dialogue between React and P5 JS"}
      ></Menu_link>
      <Menu_link
        link="/processing/multi_sketches/"
        name={"P5 JS: Mange few sketches in same time"}
      ></Menu_link>
      <Menu_link
        link="/processing/link_processing/"
        name={"P5 JS: link about P5 JS"}
      ></Menu_link>
    </div>
  );
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
  );
}

export default function Menu() {
  return (
    <div>
      <Menu_api />
      <Menu_design />
      <Menu_grid />
      <Menu_gui />
      <Menu_image />
      <Menu_misc />
      <Menu_p5 />
      <Menu_video />
    </div>
  );
}
