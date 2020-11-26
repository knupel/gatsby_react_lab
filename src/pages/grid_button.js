import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

// const set_button_style = (w, h, alpha) => {
//   return {
//     opacity: alpha,
//     width: `${w}px`,
//     height: `${h}px`,
//     border: `4px double #cccccc`,
//   }
// }

/**
 * vscode ->preference -> typeScript -> Javascript > Enable
 * */
const set_button_style = (props, is) => {
  let alpha = 0
  is ? (alpha = 1) : (alpha = 0.5)
  return {
    opacity: alpha,
    width: `${props.w}px`,
    height: `${props.h}px`,
    border: `4px double #cccccc`,
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

function PropsBase(props) {
  console.log("info", props.name, props.age)
  return (
    <div>
      <p>Your props name is {props.name}</p>
      <p>Your props age is {props.age}</p>
    </div>
  )
}
function Cell({ children, ...props }) {
  const [is, set_is] = useState(false)
  // const [alpha, set_alpha] = useState(0.5)
  // const [h, set_h] = useState(props.h)

  useEffect(() => {
    set_is(is)
    // set_alpha(alpha)
  })

  const toggle_cell = () => {
    if (is) {
      set_is(false)
      // set_alpha(0.5)
    } else {
      set_is(true)
      // set_alpha(1)
    }
  }

  return (
    <div>
      <button
        onClick={toggle_cell}
        // onMouseEnter={mouse_in}
        // onMouseLeave={mouse_out}
        className="cell"
        style={set_button_style(props, is)}
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
