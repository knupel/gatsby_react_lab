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
  MenuProcessing, 
  MenuVideo 
} from "./h"


export default function Menu() {
  return (
    <div>
      <MenuLinksUtils/>
      <MenuApi />
      <MenuCode />
      <MenuDesign />
      <MenuGrid />
      <MenuGui />
      <MenuImage />
      <MenuMisc />
      <MenuNav />
      <MenuProcessing />
      <MenuVideo />
    </div>
  );
}
