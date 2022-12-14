import React from "react"
import Layout from "../../components/struct/layout"

const LinkLocationStata = ({ location }) => {
  // need to test for step `gatsby build`
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

export default LinkLocationStata;
