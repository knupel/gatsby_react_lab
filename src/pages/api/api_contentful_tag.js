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
	 console.log("elem.slide.title",elem.slide.title);
	 console.log("elem.slide.description",elem.slide.description);
	 console.log("elem.slide.legnth",elem.slide.length);
	 console.log("elem.title",elem.title);
	 return(
	 				<div>
		 				<div>{elem.title}</div>
						<div>{elem.slide.map(elem =>(<ShowImage img={elem}/>))}</div>
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
	const n_boxon = props.data.boxon.nodes;
	// const n_attgen = props.data.nodes;
	return (
		<div>
			<Layout
				title="API Contentful show by tag"
			></Layout>
			<ShowAllContents nodes={n_boxon}/>
		</div>
	);
 }
 
 // allContentfulKnupelPage { >>> work with a single media ????
 export const content_query = graphql
 `
 query FilterByTagsQuery {
  boxon: allContentfulDiaporama(
    sort: { fields: contentful_id }
  ) {
    nodes {
      id
			title
			slide {
				id
				title
				gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
			}
    }
  }
}
`





//  `
//  query FilterByTagsQuery {
//   boxon: allContentfulDiaporama(
//     sort: { fields: contentful_id }
// 		filter: {
// 			tags: { in: ["boxon"]  }
// 		}
//   ) {
//     nodes {
//       id
// 			title
// 			slide {
// 				id
// 				title
// 				gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
// 				resize(height: 630, width: 1200) {
// 					src
// 				}
// 			}
//     }
//   }
// }
// `

//  `
//  query FilterByTagsQuery {
//   boxon: allContentfulDiaporama(
//     sort: { fields: contentful_id }
//     filter: {
//         tags: { in: ["boxon"]  }
//       }
//   ) {
//     nodes {
//      id
// 			title
// 			slide {
// 				id
// 				title
// 				gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
// 				resize(height: 630, width: 1200) {
// 					src
// 				}
// 			}
//     }
//   }
//   attgen: allContentfulDiaporama(
//     sort: { fields: contentful_id }
//     filter: {
//         tags: { in: ["attaqueGenetique"]  }
//       }
//   ) {
//     nodes {
//      id
// 			title
// 			slide {
// 				id
// 				title
// 				gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
// 				resize(height: 630, width: 1200) {
// 					src
// 				}
// 			}
//     }
//   }
// }
// `
 /*
 `
	 query {
		allContentfulDiaporama(sort: { fields: contentful_id }
			filter: {
				tags: { elemMatch: { contentful_id: { eq: "boxon" } } }
			}) {
			nodes {
				id
				title
				description {
					description
				}
				slide {
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
 */