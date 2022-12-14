import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../../components/struct/layout"
import { GatsbyImage } from "gatsby-plugin-image"


const Image = ({ name, alt, style }) => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid  {
            originalName
            ...GatsbyImageSharpFluid
          }
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `)

  const img = allImageSharp.nodes.find(elem => elem.fluid.originalName === name).gatsbyImageData;

  return (
    <figure>
      <GatsbyImage image={img}/>
    </figure>
  )
}

export default function image_multi() {
  return (
    <div>
      <Layout title="IMAGE MULTI"></Layout>
      <Image
        name="Lame_1_0_2015_11_450x300_72_dpi_Stan_le_Punk.jpg"
        style={{ width: "100%" }}
        alt=""
      />
      <Image
        name="Couleurs_primaires_2_0_2015_11_450x300_72_dpi_Stan_le_Punk.jpg"
        style={{ width: "100%" }}
        alt=""
      />
    </div>
  )
}
