/**
 * https://www.contentful.com/developers/docs/concepts/apis/
 */

import React from "react";
import Layout from "../../components/layout";

export default function ApiContentful() {
  //console.log(data.location.aboutProps.name)
  return (
    <div>
      <Layout
        title="API Contentful"
        link="true"
        to="/api/api_public"
      ></Layout>
      {/* <div>{data.location.aboutProps}</div> */}
      {/* <Link to="/">go home</Link> */}
    </div>
  );
}
