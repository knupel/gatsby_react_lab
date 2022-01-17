/**
 * https://www.contentful.com/developers/docs/concepts/apis/
 * https://www.gatsbyjs.com/plugins/gatsby-source-contentful/
 */

 import React from "react";
 import Layout from "../../components/layout";
 import { graphql } from 'gatsby';
 import { GatsbyImage } from "gatsby-plugin-image";

 function ShowImage({img}) {
	 return(<GatsbyImage alt={img.title} image={img.gatsbyImageData} />)
	

 }
 
 function ShowElem({elem}) {
	 console.log("elem.artWork.title",elem.artWork.title);
	 console.log("elem.artWork.description",elem.artWork.description);
	 console.log("elem.artWork.legnth",elem.artWork.length);
	 console.log("elem.title",elem.title);
	 return(
	 				<div>
		 				<div>{elem.title}</div>
						<div>{elem.artWork.map(elem =>(<ShowImage img={elem}/>))}</div>
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
	const nodes = props.data.allContentfulKnupelLab.nodes;
	 return (
		 <div>
			 <Layout
				 title="API Contentful show article"
			 ></Layout>
			 <ShowAllContents nodes={nodes}/>
		 </div>
	 );
 }
 
 // allContentfulKnupelPage { >>> work with a single media ????
 export const content_query = graphql
 `
	 query {
		allContentfulKnupelLab {
			nodes {
				id
				title
				description {
					description
				}
				artWork {
					description
					id
					title
					gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
					resize(height: 630, width: 1200) {
						src
					}
				}
			}
		}
	}
 `