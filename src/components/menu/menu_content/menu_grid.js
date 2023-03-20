import React from "react";
import { useState} from "react";
// APP
import { MenuLink } from "../menu_link";
import { MenuTitle } from "../menu_title";

function Deploy() {
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

export function MenuGrid() {
  const [is, set_is] = useState(false);

  function mouse_click(event) {
    event.preventDefault();
    is ? set_is(false) : set_is(true);
  }

  return (<>
      <div style={{cursor: 'pointer'}} onClick={mouse_click}><MenuTitle is={is} title="GRID"/></div>
      {is ? <Deploy/>: null}
    </>
  );
}