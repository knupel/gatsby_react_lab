import React from "react"

import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: `red`, fontSize: `18px` }}>
      <Header str="STAN LE PUNK LABO" />
      <div>
        <Link to="/about/">about</Link>
      </div>
      <div>
        <Link to="/image_direct/">images direct</Link>
      </div>
      <div>
        <Link to="/image_query/">images query</Link>
      </div>
      <div>
        <Link to="/image_fluid/">images fluid</Link>
      </div>
      <div>
        <Link to="/image_multi/">images multi</Link>
      </div>
      <div>
        <Link to="/image_grid/">images grid</Link>
      </div>
      <div>
        <Link to="/image_grid_specific_folder/">
          images grid from specific folder
        </Link>
      </div>
    </div>
  )
}
