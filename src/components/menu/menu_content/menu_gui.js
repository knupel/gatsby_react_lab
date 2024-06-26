/**
 * Menu GUI
 * v 0.0.2
 * 2022-2023
 * 
 * */

// REACT
import React from "react";
import { useState} from "react";
// APP
import { MenuLink } from "../menu_link";
import { MenuTitle } from "../menu_title";

function Deploy() {
  return (
    <div>
      <MenuLink link="/gui/side_bar/" name={"GUI: side bar"}></MenuLink>
      <MenuLink link="gui/fullscreen/" name={"GUI: fullscreen"}></MenuLink>

      <MenuLink link="gui/form/form_class/" name={"GUI: form Class"}></MenuLink>
      <MenuLink link="gui/form/form_hook/" name={"GUI: form Hook"}></MenuLink>
      <MenuLink link="gui/form/form_adv_class/" name={"GUI: form advanced Class"}></MenuLink>
      <MenuLink link="gui/form/form_adv_hook/" name={"GUI: form advanced Hook"}></MenuLink>
      <MenuLink link="gui/form/form_signup_hook/" name={"GUI: form signup Hook"}></MenuLink>

      <MenuLink link="gui/mui/mui_button_typekit_font/" name={"GUI: MUI button typekit font"}></MenuLink>
      <MenuLink link="gui/mui/mui_local_font/" name={"GUI: MUI local font"}></MenuLink>
      <MenuLink link="gui/mui/mui_icons/" name={"GUI: MUI icons"}></MenuLink>
      <MenuLink link="gui/mui/mui_data_table/" name={"GUI: MUI Data table"}></MenuLink>
      <MenuLink link="gui/mui/mui_custom_table/" name={"GUI: MUI Custom table"}></MenuLink>

      <MenuLink link="gui/shadcn/dropdowns/" name={"GUI: SHAD CN Dropdowns"}></MenuLink>
      
      <MenuLink link="gui/contact/" name={"GUI: send me an email"}></MenuLink>
      <MenuLink link="gui/button_radio/button_radio" name={"GUI: radio button"}></MenuLink>
    </div>
  );
}


export function MenuGui() {
  const [is, set_is] = useState(false);

  function mouse_click(event) {
    event.preventDefault();
    is ? set_is(false) : set_is(true);
  }

  return (<>
      <div style={{cursor: 'pointer'}} onClick={mouse_click}><MenuTitle is={is} title="GUI"/></div>
      {is ? <Deploy/>: null}
    </>
  );
}