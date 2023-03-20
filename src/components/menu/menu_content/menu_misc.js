import React from "react";
import { useState} from "react";
// APP
import { MenuLink } from "../menu_link";
import { MenuTitle } from "../menu_title";

function Deploy() {
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


export function MenuMisc() {
  const [is, set_is] = useState(false);

  function mouse_click(event) {
    event.preventDefault();
    is ? set_is(false) : set_is(true);
  }

  return (<>
      <div style={{cursor: 'pointer'}} onClick={mouse_click}><MenuTitle is={is} title="MISC"/></div>
      {is ? <Deploy/>: null}
    </>
  );
}