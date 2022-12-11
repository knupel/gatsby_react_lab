import React from "react"

export default function (props) {
  return (
    <>
      <a target="_blank" rel="noreferrer" href={props.href}>
        {props.title}
      </a>
      <br />
    </>
  )
}
