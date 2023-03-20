import React from "react";
import { useState} from "react";
// APP
import { MenuLink } from "../menu_link";
import { MenuTitle } from "../menu_title";

function Deploy() {
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

export function MenuImage() {
  const [is, set_is] = useState(false);

  function mouse_click(event) {
    event.preventDefault();
    is ? set_is(false) : set_is(true);
  }

  return (<>
      <div style={{cursor: 'pointer'}} onClick={mouse_click}><MenuTitle is={is} title="IMAGE"/></div>
      {is ? <Deploy/>: null}
    </>
  );
}