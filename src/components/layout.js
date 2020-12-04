import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import "../styles/layout.css"

const Layout = (props, { children }) => {
  // export default function Layout(props, { children }) {
  return (
    <div>
      <Link to="/">home</Link>
      <Header str={props.title} />

      {/* <footer></footer> */}
      <main>{children}</main>
    </div>
  )
}

export default Layout
