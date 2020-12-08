import React from "react"
import Img from "gatsby-image"
import Layout from "../../components/layout"
import { graphql } from "gatsby"

/**
 * For the moment and for an unknow reason the image is call from the roor folder media.
 * like set in the gatsby-config resolve: `gatsby-source-filesystem`,
 */
export const query = graphql`
  query {
    mobileImage: file(relativePath: { eq: "2020_8_11_contagion_6_3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    desktopImage: file(relativePath: { eq: "2020_8_11_contagion_6_3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default function Image({ data }) {
  if (data.mobileImage === null) {
    return (
      <div>
        <Layout title="IMAGE FLUID"></Layout>
        <p>No image match with your path, check your media</p>
      </div>
    )
  }
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
