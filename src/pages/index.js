import React from "react"

import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: `red`, fontSize: `18px` }}>
      <Header str="KNUPEL ART" />
      <Link to="/about/"> about</Link>
      <Link to="/image_direct/"> image direct</Link>
      <Link to="/image_query/"> image query</Link>
      <Link to="/image_fluid/"> image fluid</Link>
      <Link to="/image_multi_0/"> image multi 0</Link>
    </div>
  )
}
