// https://developer.mongodb.com/how-to/gatsby-modern-blog

/**
 * When you build with netlify or other site
 * You need to allow an IP address from anywhere on your Mongo DB Atlas in the tab
 * Your can set tht in the tab Network Access, and next add IP address from anywhere.
 */

import React from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

const Show = ({ children, ...props }) => {
  if (children.node.relativePath.includes(props.file_name)) {
    return (
      <div>
        <h2>{props.title}</h2>
        <p>
          size: {props.size[0]}x{props.size[1]} cm
        </p>
        <GatsbyImage image={children.node.childImageSharp.gatsbyImageData} />
      </div>
    )
  }
  return null
}

export default function Mongodb(props) {
  const art_info = props.data.allMongodbStanArtwork.edges
  const art_visual = props.data.allFile.edges
  return (
    <div>
      <Layout title="Mongo DB"></Layout>
      <p>
        Search in Mongo data base if any image in the folder media match with it
        and display if yes.
      </p>
      <div>
        {art_info.map(art => (
          <div>
            {art_visual.map(img => (
              <Show {...art.node}>{img}</Show>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query {
    allMongodbStanArtwork {
      edges {
        node {
          id
          title
          size
          artist
          year
          url_path
          file_name
        }
      }
    }
    allFile(filter: { sourceInstanceName: { eq: "media_art" } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
      }
    }
  }
`
