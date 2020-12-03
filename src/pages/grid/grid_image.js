import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/layout"

const img_grid_style = {
  display: "grid",
  // gridTemplateColumns: `repeat(auto-fill, 250px)`,
  gridTemplateColumns: `repeat(auto-fill, minmax(250px, 1fr))`,
}

export default function image_grid({ data }) {
  return (
    <div>
      <Layout title="IMAGE GRID"></Layout>
      <div style={img_grid_style}>
        {data.allImageSharp.edges.map(edge => (
          <Img height="100%" fluid={edge.node.fluid} />
        ))}
      </div>
    </div>
  )
}

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
