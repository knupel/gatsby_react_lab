/**
 * https://www.contentful.com/developers/docs/concepts/apis/
 * https://www.gatsbyjs.com/plugins/gatsby-source-contentful/
 */

import React from "react";
import Layout from "../../components/layout";
import { graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";


function ShowContent ({list}) {
  return(
    <div>{list.map(elem =>(<GatsbyImage alt={elem.title} image={elem.gatsbyImageData} />))}</div>
  )
}
export default function ApiContentful(props) {
  const content = props.data.allContentfulAsset.nodes;
  return (
    <div>
      <Layout
        title="API Contentful show all asset"
      ></Layout>
      <ShowContent list={content}/>
    </div>
  );
}

// allContentfulAsset(filter: {title: {eq: "Boxon 3"}}) {
// allContentfulAsset {
// allContentfulAsset(filter: {title: {regex: "/Boxon/"}}) {
export const content_query = graphql
`
  query {
    allContentfulAsset {
      nodes {
        title
        description
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
      }
    }
  }
`
// `
//   query {
//     allContentfulAsset {
//       nodes {
//         title
//         description
//         gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
//         resize(height: 630, width: 1200) {
//           src
//         }
//       }
//     }
//   }
// `
/*
`
query FilterByTagsQuery {
  allContentfulAsset(
    sort: { fields: contentful_id }
    filter: {
      metadata: {
        tags: { elemMatch: { contentful_id: { eq: "artWork" } } }
      }
    }
  ) {
    nodes {
      title
        description
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
        resize(height: 630, width: 1200) {
          src
        }
      }
    }
  }
`
*/

/*
`
  query {
    allContentfulAsset(filter: {title: {regex: "/Boxon/"}}) {
      nodes {
        title
        description
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
        resize(height: 630, width: 1200) {
          src
        }
      }
    }
  }
`
*/

/*
`
query FilterByTagsQuery {
  allContentfulNumber(
    sort: { fields: contentful_id }
    filter: {
      metadata: {
        tags: { elemMatch: { contentful_id: { eq: "numberInteger" } } }
      }
    }
  ) {
    nodes {
      title
      integer
    }
  }
}
`
*/