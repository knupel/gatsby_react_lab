import React from "react"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export const query = graphql`
  query {
    file(relativePath: { eq: "profil/knupel_2020_11_13_200x200px.jpg" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default function Image({ data }) {
  return (
    <div>
      <Layout title="IMAGE QUERY"></Layout>
      <Img
        className="my_image"
        fixed={data.file.childImageSharp.fixed}
        alt="my_image"
      />
    </div>
  )
}
