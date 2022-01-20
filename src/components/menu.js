import React from "react";
import { MenuLink } from "../components/menu_link";

function MenuApi() {
  return (
    <div>
      <MenuLink link="api/mongodb/" name={"API: mongo db"}></MenuLink>
      <MenuLink
        link="api/api_public/"
        name={"API: Axios acces to puplic api"}
      ></MenuLink>
      <MenuLink
        link="api/api_contentful_all_contentful_asset/"
        name={"API: Contentful CMS : all asset"}
      ></MenuLink>
      <MenuLink
        link="api/api_contentful_article/"
        name={"API: Contentful CMS : article"}
      ></MenuLink>
      <MenuLink
        link="api/api_contentful_tag/"
        name={"API: Contentful CMS : select a part of content by tag"}
      ></MenuLink>
    </div>
  );
}

function MenuDesign() {
  return (
    <MenuLink
      link="design/design_typo/"
      name={"DESIGN: choice typo typekit"}
    ></MenuLink>
  );
}

function MenuGrid() {
  return (
    <div>
      {" "}
      <MenuLink link="/grid/grid_image/" name={"GRID: images"}></MenuLink>
      <MenuLink
        link="/grid/grid_image_radio/"
        name={"GRID: selected like a radio system"}
      ></MenuLink>
      <MenuLink
        link="/grid/grid_image_specific_folder/"
        name={"GRID: image from specific folder"}
      ></MenuLink>
      <MenuLink link="/grid/grid_button/" name={"GRID: button"}></MenuLink>
      <MenuLink
        link="/grid/grid_button_advanced/"
        name={"GRID: button advanced"}
      ></MenuLink>
    </div>
  );
}

function MenuGui() {
  return (
    <div>
      <MenuLink link="/gui/side_bar/" name={"GUI: side bar"}></MenuLink>
      <MenuLink link="gui/fullscreen/" name={"GUI: fullscreen"}></MenuLink>
      <MenuLink link="gui/form_class/" name={"GUI: form Class"}></MenuLink>
      <MenuLink link="gui/form_hook/" name={"GUI: form Hook"}></MenuLink>
      <MenuLink
        link="gui/mui_button_typekit_font/"
        name={"GUI: Mui button typekit font"}
      ></MenuLink>
      <MenuLink
        link="gui/mui_local_font/"
        name={"GUI: Mui local font"}
      ></MenuLink>
      <MenuLink
        link="gui/form_signup_hook/"
        name={"GUI: form signup Hook"}
      ></MenuLink>
      <MenuLink link="gui/contact/" name={"GUI: send me an email"}></MenuLink>
    </div>
  );
}

function MenuImage() {
  return (
    <div>
      <MenuLink
        link="/image/image_direct/"
        name={"IMG: images direct"}
      ></MenuLink>
      <MenuLink
        link="/image/image_fixed/"
        name={"IMG: images fixed"}
      ></MenuLink>
      <MenuLink
        link="/image/image_fluid/"
        name={"IMG: images fluid"}
      ></MenuLink>
      <MenuLink
        link="/image/image_multi/"
        name={"IMG: images multi"}
      ></MenuLink>
    </div>
  );
}

function MenuMisc() {
  let blabla =
    "Something from the Head Quarter Menu.js : use state={{ info: props.str }} in the Gatsby component Link and catch it with location.state.xxx!";
  return (
    <div>
      <MenuLink
        link="/misc/link_utils/"
        name={"MISC: fews interesting externals links"}
      ></MenuLink>
      <MenuLink
        link="/misc/container_test/"
        name={"MISC: container test"}
      ></MenuLink>
      <MenuLink
        link="/misc/link_location_state/"
        name={"MISC: pass data from menu link with component Gatsby Link"}
        str={blabla}
      ></MenuLink>
      <MenuLink link="/misc/react_info/" name={"MISC: react info"}></MenuLink>
      <MenuLink
        link="/misc/context_reducer/"
        name={"MISC: use reducer, context and dispatch"}
      ></MenuLink>
    </div>
  );
}

function MenuP5() {
  return (
    <div>
      <MenuLink
        link="/processing/no_dial_just_processing/"
        name={
          "P5 JS: No dialogue between react and P5 JS, just show the sketch"
        }
      ></MenuLink>
      <MenuLink
        link="/processing/dial_processing_react/"
        name={"P5 JS: dialogue between React and P5 JS"}
      ></MenuLink>
      <MenuLink
        link="/processing/multi_sketches/"
        name={"P5 JS: Manage few sketches in same time"}
      ></MenuLink>
      <MenuLink
        link="/processing/link_processing/"
        name={"P5 JS: link about P5 JS"}
      ></MenuLink>
    </div>
  );
}

function MenuVideo() {
  return (
    <div>
      <MenuLink link="/video/video_basic/" name={"VIDEO: basic"}></MenuLink>
      <MenuLink
        link="/video/video_fullscreen/"
        name={"VIDEO: fullscreen"}
      ></MenuLink>
    </div>
  );
}

export default function Menu() {
  return (
    <div>
      <MenuApi />
      <MenuDesign />
      <MenuGrid />
      <MenuGui />
      <MenuImage />
      <MenuMisc />
      <MenuP5 />
      <MenuVideo />
    </div>
  );
}
