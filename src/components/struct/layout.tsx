import React, { FC } from 'react';
import { Link } from "gatsby"
import Header from "./header"
import "./layout.css"

interface LayoutProps {
  [props: string]: any;
}


const Layout: FC<LayoutProps> = (props, { children }) => {
  // export default function Layout(props, { children }) {
  if (props.link === "false") {
    return (
      <div>
        <Header str={props.title} />
        <main>{children}</main>
      </div>
    )
  } else {
    if (typeof props.to !== "undefined") {
      // let buf = props.to
      let arr = props.to.split("/")
      let len = arr.length
      return <Link to={props.to}>{arr[len - 1]}</Link>
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
}

export default Layout
