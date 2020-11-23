import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

const img_grid_style = {
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, 400px)`,
}

function ImageMenu({ children }) {
  return <Img fluid={children.childImageSharp.fluid} />
}

export default ({ data }) => {
  return (
    <div>
      <Layout title="IMAGE GRID FROM SPECIFIC FOLDER BE OPEN"></Layout>
      <div style={img_grid_style}>
        {data.allFile.edges.map(({ node }) => (
          <ImageMenu>{node}</ImageMenu>
          /* <Img fluid={node.childImageSharp.fluid} /> */
        ))}
      </div>
    </div>
  )
}

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "tdm" } }) {
      edges {
        node {
          extension
          relativePath
          childImageSharp {
            fluid(maxWidth: 200, maxHeight: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
