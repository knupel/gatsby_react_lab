import React from "react"
import Layout from "../components/layout"

export default ({ location }) => {
  return (
    <div>
      <Layout title="FROM THE HEAD QUARTER"></Layout>
      <div>{location.state.info}</div>
    </div>
  )
}
