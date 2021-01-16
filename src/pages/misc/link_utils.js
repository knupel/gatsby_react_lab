import React from "react"
import Layout from "../../components/layout"
// add this external link in the future
// https://archive.org/
// https://www.archive-arn.fr/
// https://overreacted.io/

export default function () {
  return (
    <div>
      <Layout title="EXTERNAL UTILS LINK"></Layout>
      <p>About code</p>
      <a target="_blank" rel="noreferrer" href="https://overreacted.io/">
        Dan Abramov Blog
      </a>
      <br />
      <br />
      <p>About fun</p>
      <a target="_blank" rel="noreferrer" href="https://archive.org/">
        Internet archive
      </a>
      <br />
      <a target="_blank" rel="noreferrer" href="https://www.archive-arn.fr/">
        Architecture vernaculaire
      </a>
      <br />
      <a target="_blank" rel="noreferrer" href="https://atlasrn.fr/">
        Atlas vernaculaire
      </a>
      <br />
      <a target="_blank" rel="noreferrer" href="http://getemoji.com/">
        Emoji
      </a>
    </div>
  )
}
