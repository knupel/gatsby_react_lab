import React from "react"
import Header from "../components/header"
import Menu from "../components/menu"
// add this external link in the future
// https://archive.org/

export default function Home() {
  return (
    <div>
      <Header str="Knupel Geheimlabor" />
      <Menu />
    </div>
  )
}
