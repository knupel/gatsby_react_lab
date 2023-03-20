import React from "react";
import { useState} from "react";
// APP
import { MenuLink } from "../menu_link";
import { MenuTitle } from "../menu_title";

function Deploy() {
  return <>
    <MenuLink
      link="code/destructuring_array/"
      name={"CODE: destructuring array"}
    ></MenuLink>
    <MenuLink
      link="code/query_selector/"
      name={"CODE: catch something from your project code"}
    ></MenuLink>
  </>;
}

export function MenuCode() {
  const [is, set_is] = useState(false);

  function mouse_click(event) {
    event.preventDefault();
    is ? set_is(false) : set_is(true);
  }

  return (<>
      <div style={{cursor: 'pointer'}} onClick={mouse_click}><MenuTitle is={is} title="CODE"/></div>
      {is ? <Deploy/>: null}
    </>
  );
}