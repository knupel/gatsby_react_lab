import React from "react"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export const query = graphql`
  query {
    mobileImage: file(
      relativePath: {
        eq: "knupel_72dpi/Boxon_1_0_2015_11_450x300_72_dpi_Stan_le_Punk.jpg"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    desktopImage: file(
      relativePath: {
        eq: "knupel_72dpi/Boxon_1_0_2015_11_450x300_72_dpi_Stan_le_Punk.jpg"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default function Image({ data }) {
  const sources = [
    data.mobileImage.childImageSharp.fluid,
    {
      ...data.desktopImage.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ]
  return (
    <div>
      <Layout title="IMAGE FLUID"></Layout>
      <Img fluid={sources} />
    </div>
  )
}
