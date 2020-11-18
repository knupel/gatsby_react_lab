import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

const img_grid_style = {
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, 200px)`,
}

export default ({ data }) => (
  <div>
    <Layout title="IMAGE GRID FROM SPECIFIC FOLDER"></Layout>
    <div style={img_grid_style}>
      {data.allFile.edges.map(edge => (
        <Img fluid={edge.node.fluid} />
      ))}
    </div>
  </div>
)

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "media" } }) {
      edges {
        node {
          extension
          relativePath
          childImageSharp {
            fluid(maxWidth: 200, maxHeight: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
// extension: { regex: "/jpeg|jpg/" }

// import React from "react"
// import Img from "gatsby-image"
// import { StaticQuery, graphql } from "gatsby"
// function renderImage(file) {
//   console.log(file)
//   return <Img fluid={file.node.childImageSharp.fluid} />
// }

// const MyImg = function (props) {
//   return (
//     <StaticQuery
//       query={graphql`
//         query {
//           images: allFile(
//             filter: { extension: { regex: "/jpeg|jpg|png|gif/" } }
//           ) {
//             edges {
//               node {
//                 extension
//                 relativePath
//                 childImageSharp {
//                   fluid(maxWidth: 1000) {
//                     ...GatsbyImageSharpFluid
//                   }
//                 }
//               }
//             }
//           }
//         }
//       `}
//       render={({ images }) =>
//         renderImage(
//           images.edges.find(image => image.node.relativePath === props.src)
//         )
//       }
//     />
//   )
// }

/*
{
      allFile(filter: { sourceInstanceName: { eq: "champImages" } }) {
        edges {
          node {
            extension
            relativePath
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    */
/*
export const query = graphql`
  query {
    allImageSharp(filter: { id: { regex: "/media/" } }) {
      edges {
        node {
          id
          fluid(maxWidth: 200, maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
*/

// query HeaderQuery {
//   exampleImage: file(
//     extension: {eq: "jpg"},
//     name: {eq: "exampleImage"}
//   ) {
//     childImageSharp {
//       fluid {
//         src
//         srcSet
//         sizes
//         srcSetWebp
//       }
//     }
//   }
// }

// allImageSharp(filter: { sourceInstanceName: { eq: "media" } }) {
// allImageSharp {
// allFile(filter: { sourceInstanceName: { eq: "media" } }) {

// images: allImageSharp(filter: { id: { regex: "/media/" } }) {

// all picture from folder data
// export const query = graphql`
//   query {
//     allImageSharp {
//       edges {
//         node {
//           id
//           fluid(maxWidth: 200, maxHeight: 200) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   }
// `

// export const query = graphql`
//   query {
//     allFile(filter: { sourceInstanceName: { eq: "media" } }) {
//       childImageSharp {
//         edges {
//           node {
//             id
//             fluid(maxWidth: 200, maxHeight: 200) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `
