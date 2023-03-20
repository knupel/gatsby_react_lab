// REACT
import React from "react";
import { useState} from "react";
// APP
import { MenuLink } from "../menu_link";
import { MenuTitle } from "../menu_title";

function Deploy() {
  return (
    <div>
      <MenuLink link="/links_utils/links_utils/" name={"LINK: fews interesting externals links"}/>
    </div>
  );
}

export function MenuLinksUtils() {
  const [is, set_is] = useState(false);

  function mouse_click(event) {
    event.preventDefault();
    is ? set_is(false) : set_is(true);
  }

  return (<>
      <div style={{cursor: 'pointer'}} onClick={mouse_click}><MenuTitle is={is} title="LINKS"/></div>
      {is ? <Deploy/>: null}
    </>
  );
}