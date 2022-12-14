/**
 * CAROUSEL PLUGIN
 * 2022-2022
 * // https://learus.github.io/react-material-ui-carousel/
 * // https://github.com/Learus/react-material-ui-carousel
 * */


import React from "react"
import Layout from "../../components/layout"
// carousel
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";




function Item({index, node}) {
	console.log("index",index);
	console.log("node.name",node.name);
	return (
		<Paper>
			{/* <h2>{content.name}</h2>  */}
			<p>{node.name}</p>
			<GatsbyImage image={node.childImageSharp.gatsbyImageData}/>
			<Button>Check it out</Button>
		</Paper>
	)
}


function CarouselLab({data}) {
	console.log("data", data.allFile.edges.length);
	return (
		<Carousel>
			{data.allFile.edges.map(({node}, index) => 
				<Item index={index} node={node} />
			)}
    </Carousel>
	)
}





export default function carousel_mui({data}) {
  return (
    <div>
      <Layout title="CAROUSEL ou DIAPORAMA based on Material UI and react-material-ui-carousel"></Layout>
			<CarouselLab data={data}/>
    </div>
  )
}



export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "tdm" } }) {
      edges {
        node {
          extension
          relativePath
					name
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED,  width: 800, height: 800)
          }
        }
      }
    }
  }
`;