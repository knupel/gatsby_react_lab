import React from "react";
import Layout from "../../components/struct/layout";
import NewTabLink from "../../components/new_tab_link";

export default function P5() {
  return (
    <div>
      <Layout title="Framework: P5JS link"></Layout>
      <NewTabLink
        href="https://github.com/doubledherin/gatsby-p5-starter"
        title="stater P5JS by Wendy Dherin"
      />
      <NewTabLink
        href="https://www.zjexpress.net/GettingP5ToWorkInGatsby/"
        title="Paper explain make something with P5JS and J5 with class React"
      />
      <NewTabLink
        href="https://codemental.medium.com/gatsby-p5-js-1dd085f42100"
        title="Paper medium for P5JS embaded roadmap"
      />
    </div>
  );
}
