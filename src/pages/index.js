import React from "react"

import Header from "../components/header"
import Menu from "../components/menu"
import Layout from "../components/layout"

/**
 * To enable or daisable global style go to gatsby-browser.js
 *
 *
 */
// add this external link in the future
// https://archive.org/

export default function Home() {
  return (
    <div>
      {/* <div style={{ color: `red`, fontSize: `18px` }}> */}
      {/* <Layout> */}
      <Header str="Knupel Geheimlabor" />
      <Menu />
      {/* </Layout> */}
    </div>
  )
}
