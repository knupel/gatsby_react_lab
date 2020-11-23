import React from "react"

import Header from "../components/header"
import Menu from "../components/menu"
// add this external link in the future
// https://archive.org/
export default function Home() {
  return (
    <div style={{ color: `red`, fontSize: `18px` }}>
      <Header str="STAN LE PUNK LABO" />
      <Menu />
    </div>
  )
}
