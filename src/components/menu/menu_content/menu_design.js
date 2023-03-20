import React from "react";
import { useState} from "react";
// APP
import { MenuLink } from "../menu_link";
import { MenuTitle } from "../menu_title";

function Deploy() {
  return <>
    <MenuLink
      link="design/design_typo/"
      name={"DESIGN: choice typo typekit"}
    ></MenuLink>
    <MenuLink
      link="design/highlight_code/"
      name={"DESIGN: highlight your code with Prism"}
    ></MenuLink>
    <MenuLink
      link="design/color_conversion/"
      name={"DESIGN: Convert color is always useful"}
    ></MenuLink>
  </>;
}

export function MenuDesign() {
  const [is, set_is] = useState(false);

  function mouse_click(event) {
    event.preventDefault();
    is ? set_is(false) : set_is(true);
  }

  return (<>
      <div style={{cursor: 'pointer'}} onClick={mouse_click}><MenuTitle is={is} title="DESIGN"/></div>
      {is ? <Deploy/>: null}
    </>
  );
}