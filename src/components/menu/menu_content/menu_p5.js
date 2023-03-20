// REACT
import React from "react";
import { useState} from "react";
// APP
import { MenuLink } from "../menu_link";
import { MenuTitle } from "../menu_title";

function Deploy() {
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

export function MenuP5() {
  const [is, set_is] = useState(false);

  function mouse_click(event) {
    event.preventDefault();
    is ? set_is(false) : set_is(true);
  }

  return (<>
      <div style={{cursor: 'pointer'}} onClick={mouse_click}><MenuTitle is={is} title="P5"/></div>
      {is ? <Deploy/>: null}
    </>
  );
}