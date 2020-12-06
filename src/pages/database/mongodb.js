// https://developer.mongodb.com/how-to/gatsby-modern-blog

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
        }
      }
    }
  }
`
