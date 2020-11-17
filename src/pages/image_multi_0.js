import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Image = ({ fileName, alt, style }) => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid(maxWidth: 1600) {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const fluid = allImageSharp.nodes.find(n => n.fluid.originalName === fileName)
    .fluid

  return (
    <figure>
      <Img fluid={fluid} alt={alt} style={style} />
    </figure>
  )
}

export default function image_multi_0() {
  return (
    <div>
      <Image
        fileName="Lame_1_0_2015_11_450x300_72_dpi_Stan_le_Punk.jpg"
        style={{ width: "100%" }}
        alt=""
      />
      <Image
        fileName="Couleurs_primaires_2_0_2015_11_450x300_72_dpi_Stan_le_Punk.jpg"
        style={{ width: "100%" }}
        alt=""
      />
    </div>
  )
}
