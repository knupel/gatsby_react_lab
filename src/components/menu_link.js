import React from "react"
import { Link } from "gatsby"

export function Homelink(props) {
  return (
    <div>
      <Link to={props.link} state={{ info: props.str }}>
        {props.name}
      </Link>
    </div>
  )
}
