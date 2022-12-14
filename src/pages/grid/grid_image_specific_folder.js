import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../../components/layout";


const img_grid_style = {
  display: "grid",
  gridTemplateColumns: `1fr 1fr 1fr`,
};

function Info({node}) {
  return(<div></div>)
}
const GridImgSpecificFolder = ({ data }) => {
  return (
    <div>
      <Layout title="IMAGE GRID FROM SPECIFIC FOLDER"></Layout>
      <div style={img_grid_style}>
        {data.allFile.edges.map(({ node }) => (
          <div>
          <Info node ={node}/>
          <GatsbyImage image={node.childImageSharp.gatsbyImageData}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridImgSpecificFolder;

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "media_art" } }) {
      edges {
        node {
          extension
          relativePath
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, width: 800, height: 800)
          }
        }
      }
    }
  }
`;



