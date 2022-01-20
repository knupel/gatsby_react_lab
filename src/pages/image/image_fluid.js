import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import { graphql } from "gatsby"

/**
 * For the moment and for an unknow reason the image is call from the root folder media.
 * like set in the gatsby-config resolve: `gatsby-source-filesystem`,
 */
export const query = graphql`
  query {
    mobileImage: file(relativePath: { eq: "2020_8_11_contagion_6_3.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 300, height: 300)
      }
    }
    desktopImage: file(relativePath: { eq: "2020_8_11_contagion_6_3.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 1000, height: 1000)
      }
    }
  }
`

export default function Image({ data }) {
  if (data.mobileImage === null) {
    return (
      <div>
        <Layout title="IMAGE NULL"></Layout>
        <p>No image match with your path, check your media</p>
      </div>
    )
  }
  const sources = [
    data.mobileImage.childImageSharp.gatsbyImageData,
    {
      ...data.desktopImage.childImageSharp.gatsbyImageData,
      media: `(min-width: 768px)`,
    },
  ]
  return (
    <div>
      <Layout title="IMAGE"></Layout>
      <GatsbyImage image={sources[0]}/>
    </div>
  )
}
