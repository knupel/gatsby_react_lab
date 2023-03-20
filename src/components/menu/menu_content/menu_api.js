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

export function MenuApi() {
  const [is, set_is] = useState(false);

  function mouse_click(event) {
    event.preventDefault();
    is ? set_is(false) : set_is(true);
  }

  return (<>
      <div style={{cursor: 'pointer'}} onClick={mouse_click}><MenuTitle is={is} title="API"/></div>
      {is ? <Deploy/>: null}
    </>
  );
}