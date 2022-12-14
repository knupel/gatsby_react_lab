/**
 * https://www.contentful.com/developers/docs/concepts/apis/
 * https://www.gatsbyjs.com/plugins/gatsby-source-contentful/
 */

import React from "react";
import Layout from "../../components/struct/layout";
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