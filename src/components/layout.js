import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import "../styles/layout.css"

const Layout = (props, { children }) => {
  // export default function Layout(props, { children }) {
  if (props.link === "false") {
    return (
      <div>
        <Header str={props.title} />
        <main>{children}</main>
      </div>
    )
  } else {
    return (
      <div>
        <Link to="/">home</Link>
        <Header str={props.title} />

        {/* <footer></footer> */}
        <main>{children}</main>
      </div>
    )
  }
}

export default Layout
