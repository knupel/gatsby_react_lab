import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../../components/struct/layout"

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
          <GatsbyImage image={edge.node.gatsbyImageData} />
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
          gatsbyImageData(height: 250, width: 250, placeholder: BLURRED)
        }
      }
    }
  }
`
