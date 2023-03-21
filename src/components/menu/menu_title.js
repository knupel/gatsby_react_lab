import React from "react";

export function MenuTitle({is, title}) {
  const close = "+ " + title;
  const open = "- " + title;

  return <>
    {is ? <div>{open}</div>: <div>{close}</div>}
    </>

}