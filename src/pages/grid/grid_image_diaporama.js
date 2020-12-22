import React from "react"
import { Fragment } from "react"

import { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/layout"

//https://fmontes.com/blog/dynamic-gatsby-images-an-anternative/

// stackoverflow.com/questions/31101445/in-react-native-how-do-i-put-a-view-on-top-of-another-view-with-part-of-it-lyi
// https://dev.to/pnkfluffy/passing-data-from-child-to-parent-with-react-hooks-1ji3
const img_grid_style = {
  display: "grid",
  // gridTemplateColumns: `repeat(auto-fill, 250px)`,
  gridTemplateColumns: `repeat(auto-fill, minmax(250px, 1fr))`,
}

// avout cursor
// https://developer.mozilla.org/fr/docs/Web/CSS/cursor
const cell_style = over_is => {
  let cursor_is = `auto`
  if (cursor_is) cursor_is = `pointer`

  return {
    width: `100%`,
    height: `100%`,
    border: `0`,
    padding: `0`,
    cursor: cursor_is,
  }
}

// zIndex: 1
// position: 'absolute'
function Diaporama({ children, ...props }) {
  if (props.show_is) {
    return (
      <Fragment>
        <div
          style={{
            backgroundColor: "red",

            width: "1000px",
            height: "1000px",
            position: "absolute",
          }}
        >
          <Img height="100%" fluid={children.node.childImageSharp.fluid}></Img>
        </div>
      </Fragment>
    )
  } else {
    return <Fragment></Fragment>
  }
}

function Cell({ children }) {
  // over
  const [over_is, set_over_is] = useState(false)
  useEffect(() => {
    set_over_is(over_is)
  }, [over_is])
  const mouse_state = () => {
    over_is ? set_over_is(false) : set_over_is(true)
  }

  // toggle
  const [toggle_is, set_toggle_is] = useState(false)
  useEffect(() => {
    set_toggle_is(toggle_is)
  }, [toggle_is])
  const toggle_state = () => {
    toggle_is ? set_toggle_is(false) : set_toggle_is(true)
  }

  // rendering
  return (
    <Fragment>
      <button
        onClick={toggle_state}
        onMouseEnter={mouse_state}
        onMouseLeave={mouse_state}
        style={cell_style(over_is)}
      >
        <Img height="100%" fluid={children.node.childImageSharp.fluid}></Img>
      </button>
      <button
        onClick={toggle_state}
        style={{ zIndex: 100, position: "absolute", border: 0, padding: 0 }}
      >
        <Diaporama show_is={toggle_is}>{children}</Diaporama>
      </button>
    </Fragment>
  )
}

export default function ({ data }) {
  return (
    <div>
      <Layout title="GRID IMAGE selected one to display in diaporama"></Layout>
      <div style={img_grid_style}>
        {data.allFile.edges.map(edge => (
          <Cell>{edge}</Cell>
        ))}
      </div>
    </div>
  )
}

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "media_art" } }) {
      edges {
        node {
          extension
          relativePath
          name
          extension
          childImageSharp {
            fluid(maxWidth: 2000, maxHeight: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
