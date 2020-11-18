import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

const imgGridStyle = {
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, 200px)`,
}

export default ({ data }) => (
  <div>
    <Layout title="IMAGE GRID"></Layout>
    <div style={imgGridStyle}>
      {data.allImageSharp.edges.map(edge => (
        <Img fluid={edge.node.fluid} />
      ))}
    </div>
  </div>
)

export const query = graphql`
  query {
    allImageSharp {
      edges {
        node {
          id
          fluid(maxWidth: 200, maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
