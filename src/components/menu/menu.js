import React from "react";
import { MenuLink } from "./menu_link";

function MenuApi() {
  return (
    <div>
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
            <MenuLink
        link="api/api_google_map_react/"
        name={"API: Google Map React"}
      ></MenuLink>
    </div>
  );
}

function MenuCode() {
  return <>
    <MenuLink
      link="code/destructuring_array/"
      name={"CODE: destructuring array"}
    ></MenuLink>
  </>;
}

function MenuDesign() {
  return <>
    <MenuLink
      link="design/design_typo/"
      name={"DESIGN: choice typo typekit"}
    ></MenuLink>
    <MenuLink
      link="design/highlight_code/"
      name={"DESIGN: highlight your code with Prism"}
    ></MenuLink>
  </>;
}

function MenuGrid() {
  return (
    <div>
      {" "}
      <MenuLink link="/grid/grid_image/" name={"GRID: grid image"}></MenuLink>
      <MenuLink
        link="/grid/grid_image_zoom_over/"
        name={"GRID: grid image zoom over"}
      ></MenuLink>
      <MenuLink
        link="/grid/grid_image_radio/"
        name={"GRID: grid image radio"}
      ></MenuLink>
      <MenuLink
        link="/grid/grid_image_specific_folder/"
        name={"GRID: grid image specific folder"}
      ></MenuLink>
      <MenuLink link="/grid/grid_button/" name={"GRID: button"}></MenuLink>
      <MenuLink
        link="/grid/grid_button_advanced/"
        name={"GRID: grid button advanced"}
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
      <MenuLink link="gui/form_adv_class/" name={"GUI: form advanced Class"}></MenuLink>
      <MenuLink link="gui/form_adv_hook/" name={"GUI: form advanced Hook"}></MenuLink>
      <MenuLink
        link="gui/mui_button_typekit_font/"
        name={"GUI: MUI button typekit font"}
      ></MenuLink>
      <MenuLink
        link="gui/mui_local_font/"
        name={"GUI: MUI local font"}
      ></MenuLink>
      <MenuLink
        link="gui/mui_icons/"
        name={"GUI: MUI icons"}
      ></MenuLink>
      <MenuLink
        link="gui/form_signup_hook/"
        name={"GUI: form signup Hook"}
      ></MenuLink>

      <MenuLink link="gui/contact/" name={"GUI: send me an email"}></MenuLink>
      <MenuLink link="gui/button_radio/button_radio" name={"GUI: radio button"}></MenuLink>
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
      <MenuLink
        link="/image/image_carousel/"
        name={"IMG: carousel based on react-material-ui-carousel"}
      ></MenuLink>
      <MenuLink
        link="/image/image_diaporama/"
        name={"IMG: diaporama made in le Pré Saint-Gervais"}
      ></MenuLink>
    </div>
  );
}

function MenuMisc() {
  return (
    <div>
      <MenuLink
        link="/misc/container_test/"
        name={"MISC: container test"}
      ></MenuLink>
      <MenuLink
        link="/misc/link_location_state/"
        name={"MISC: pass data from menu link with component Gatsby Link"}
        str={"Something from the Head Quarter Menu.js : use state={{ info: props.str }} in the Gatsby component Link and catch it with location.state.xxx!"}
      ></MenuLink>
      <MenuLink link="/misc/react_info/" name={"MISC: react info"}></MenuLink>
      <MenuLink
        link="/misc/context_reducer/"
        name={"MISC: use reducer, context and dispatch"}
      ></MenuLink>
      <MenuLink
        link="/misc/css_variable_root/"
        name={"MISC: catch the css globales variables :root --my_var to use in your app"}
      ></MenuLink>

      <MenuLink
        link="/misc/transition/"
        name={"MISC: transition test"}
      ></MenuLink>
       <MenuLink
        link="/misc/code_sandbox/"
        name={"MISC: Embed Code Sandbox"}
      ></MenuLink>
    </div>
  );
}

function MenuNav() {
  return (
    <div>
      <MenuLink
        link="/nav/nav_motion/"
        name={"NAV: navigation with motion"}
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
      <MenuLink link="/link_utils/" name={"LINK: fews interesting externals links"}/>
      <MenuApi />
      <MenuCode />
      <MenuDesign />
      <MenuGrid />
      <MenuGui />
      <MenuImage />
      <MenuMisc />
      <MenuNav />
      <MenuP5 />
      <MenuVideo />
    </div>
  );
}
