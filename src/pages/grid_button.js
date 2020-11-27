import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { hsb_to_hex } from "../utils/color_convertor"

/**
 * remove the problem of problem syntax unknew in this case, with the binary statement else-if
 * vscode ->preference -> typeScript -> Javascript > Enable
 * */
const set_button_style = (props, select_is, mouse_is) => {
  let alpha = 0
  select_is ? (alpha = 1) : (alpha = 0.5)
  let border_is

  let hex_color = hsb_to_hex(0.5, 1, 1)
  console.log("hex_color: ", hex_color)

  mouse_is ? (border_is = `10px solid ${hex_color}`) : (border_is = `0`)
  return {
    opacity: alpha,
    width: `${props.w}px`,
    height: `${props.h}px`,
    border: border_is,
    marge: 3,
    padding: 0,
    // border: `4px double #cccccc`,
  }
}

const img_grid_style = {
  display: "grid",
  gridColumnGap: `2px`,
  gridRowGap: `2px`,
  // gridTemplateColumns: `repeat(auto-fill)`,
  gridTemplateColumns: `repeat(auto-fill, 100px)`,
  // gridTemplateRows: `repeat(auto-fill, 100px)`,
}

function Cell({ children, ...props }) {
  const [is, set_is] = useState(false)
  useEffect(() => {
    set_is(is)
  })
  const [mouse_is, set_mouse_is] = useState(false)

  useEffect(() => {
    set_mouse_is(mouse_is)
  })

  const toggle_cell = () => {
    if (is) {
      set_is(false)
    } else {
      set_is(true)
    }
  }

  const mouse_state = () => {
    mouse_is ? set_mouse_is(false) : set_mouse_is(true)
  }

  return (
    <div>
      <button
        onClick={toggle_cell}
        onMouseEnter={mouse_state}
        onMouseLeave={mouse_state}
        className="cell"
        style={set_button_style(props, is, mouse_is)}
        // style={set_button_style(props.w, props.h, alpha)}
      >
        {<Img fluid={children.childImageSharp.fluid} />}
      </button>
    </div>
  )
}

export default ({ data }) => {
  // const [w, set_w] = useState(100)
  // const [h, set_h] = useState(100)
  return (
    <div>
      <Layout title="GRID BUTTON"></Layout>
      {/* <PropsBase name="Knupel" age={46}></PropsBase> */}

      <div style={img_grid_style}>
        {data.allFile.edges.map(({ node }) => (
          <Cell w={100} h={100}>
            {node}
          </Cell>
        ))}
      </div>
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
          childImageSharp {
            fluid(maxWidth: 200, maxHeight: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
