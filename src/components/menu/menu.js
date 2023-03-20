import React from "react";
import { 
        MenuLinksUtils,
        MenuApi, 
        MenuCode, 
        MenuDesign, 
        MenuGrid,
        MenuGui,
        MenuImage,
        MenuMisc,
        MenuNav,
        MenuP5, 
        MenuVideo } from "./h"

export default function Menu() {
  return (
    <div>
      <MenuLinksUtils/>
      <MenuApi/>
      <MenuCode />
      <MenuDesign/>
      <MenuGrid/>
      <MenuGui/>
      <MenuImage/>
      <MenuMisc/>
      <MenuNav/>
      <MenuP5/>
      <MenuVideo/>
    </div>
  );
}
