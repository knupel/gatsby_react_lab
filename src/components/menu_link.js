import React from "react"

import { Link } from "gatsby"

export function Homelink(props) {
  return (
    <div>
      <Link to={props.link}>{props.name}</Link>
    </div>
  )
}
