import React from "react"
import { Link } from "gatsby"

export function Menu_link(props) {
  return (
    <div>
      <Link to={props.link} state={{ info: props.str }}>
        {props.name}
      </Link>
    </div>
  )
}
