import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Container from "../components/container"

export default function Layout(props, { children }) {
  return (
    <div>
      <Container>
        <Link to="/">home</Link>
        <Header str={props.title} />
      </Container>
      <div>{children}</div>
    </div>
  )
}
