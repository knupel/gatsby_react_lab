/**
 * https://www.contentful.com/developers/docs/concepts/apis/
 * https://www.gatsbyjs.com/plugins/gatsby-source-contentful/
 */

 import React from "react";
 import Layout from "../../components/struct/layout";
 import { graphql } from 'gatsby';
 import { GatsbyImage } from "gatsby-plugin-image";

 function ShowImage({img}) {
	 return(<GatsbyImage alt={img.title} image={img.gatsbyImageData} />)
 }
 
 function ShowElem({elem}) {
	 return(
	 				<div>
		 				<div>{elem.title}</div>
						<div>{elem.artwork.map(elem =>(<ShowImage img={elem}/>))}</div>
					</div>
					)

 }


 function ShowAllContents ({nodes}) {
	 return(
		 <div>{nodes.map(elem =>(<ShowElem elem={elem}/>))}</div>
	 )
 }

 export default function ApiContentful(props) {
	//  const nodes = props.data.allContentfulKnupelPage.nodes; >>> work with a single media ????
	const nodes = props.data.allContentfulPageArtwork.nodes;
	 return (
		 <div>
			 <Layout
				 title="API Contentful show article"
			 ></Layout>
			 <ShowAllContents nodes={nodes}/>
		 </div>
	 );
 }
 

 export const content_query = graphql
 `
 query {
	allContentfulPageArtwork {
		nodes {
			id
			title
			description {
				description
			}
			artwork {
				description
				id
				title
				gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
			}
		}
	}
}
`



export const Head = () => {
	<>
		<title>API Contentful</title>
		<meta name="author" content="Knupel" />
		<meta name="description" content="Laboratoire pour tester l'API Contentful" />
	</>
}