import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../../components/struct/layout"
import { graphql } from "gatsby"

export const query = graphql`
  query {
    file(relativePath: { eq: "profil/knupel_2020_11_13_200x200px.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width:200, height: 200, placeholder: BLURRED)
      }
    }
  }
`


export default function ImageFixed({ data }) {
  return (
    <div>
      <Layout title="IMAGE FIXED"></Layout>
      <GatsbyImage image={data.file.childImageSharp.gatsbyImageData}/>
    </div>
  )
}
