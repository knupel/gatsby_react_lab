// https://developer.mongodb.com/how-to/gatsby-modern-blog

/**
 * When you build with netlify or other site
 * You need to allow an IP address from anywhere on your Mongo DB Atlas in the tab
 * Your can set tht in the tab Network Access, and next add IP address from anywhere.
 */

import React from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"

export default function Mongodb(props) {
  const list_artwork = props.data.allMongodbStanArtwork.edges
  return (
    <div>
      <Layout title="Mongo DB"></Layout>
      <div>
        {list_artwork.map(art => (
          <div>
            <h2>{art.node.title}</h2>
            <p>
              taille: {art.node.width}x{art.node.height} cm
            </p>
            <p>
              size: {art.node.size[0]}x{art.node.size[1]} cm
            </p>
          </div>
          // <div>
          //   <Link to={"/art/" + art.node.title}>
          //     {/* <img src={art.node.thumbnailUrl} /> */}
          //     <h2>{art.node.title}</h2>
          //     {/* <p>{art.node.shortDescription}</p> */}
          //   </Link>
          // </div>
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
          width
          height
          size
          artist
          year
        }
      }
    }
  }
`
