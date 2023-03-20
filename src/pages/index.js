import React from "react"
import Header from "../components/struct/header"
import Menu from "../components/menu/menu"

export default function Home() {
  const year = new Date().getFullYear();
  const str = "Knupel Geheimlabor >>> 2021-"+year+" >>> v 0.1.7.0"
  return (
    <div>
      <Header str={str} />
      <Menu />
    </div>
  )
}
