import React from "react"
import { Link } from "gatsby"

export function MenuLink({name, link, str}) {
  return (
    <div>
      <Link to={link} state={{ info: str }}>
        {name}
      </Link>
    </div>
  )
}
