import React from "react"
import Layout from "../components/layout"

export default ({ location }) => {
  // console.log("ICI PARIS")
  // console.log("location.state.info", location.state.info)
  if (!location.state) {
    return null
  } else {
    return (
      <div>
        <Layout title="FROM THE HEAD QUARTER"></Layout>
        <div>{location.state.info}</div>
      </div>
    )
  }
}
