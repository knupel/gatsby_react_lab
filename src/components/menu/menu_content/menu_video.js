import React from "react";
import { useState} from "react";
// APP
import { MenuLink } from "../menu_link";
import { MenuTitle } from "../menu_title";

function Deploy() {
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


export function MenuVideo() {
  const [is, set_is] = useState(false);

  function mouse_click(event) {
    event.preventDefault();
    is ? set_is(false) : set_is(true);
  }

  return (<>
      <div style={{cursor: 'pointer'}} onClick={mouse_click}><MenuTitle is={is} title="VIDÉO"/></div>
      {is ? <Deploy/>: null}
    </>
  );
}