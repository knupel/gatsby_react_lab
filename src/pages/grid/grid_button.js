import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../../components/struct/layout"
import { hsb_to_hex } from "../../utils/color_convertor"


/**
 * remove the problem of problem syntax unknew in this case, with the binary statement else-if
 * vscode ->preference -> typeScript -> Javascript > Enable
 * */
const set_button_style = (props, select_is, mouse_is) => {
  let alpha = 0
  alpha = select_is ? 1 : 0.5

  let hex_color = hsb_to_hex(0.5, 1, 1)
  let border_is
  border_is = mouse_is ? `10px solid ${hex_color}` : `0`
  return {
    opacity: alpha,
    width: `${props.w}px`,
    height: `${props.h}px`,
    border: border_is,
    padding: 0,
  }
}

const img_grid_style = size => {
  return {
    display: "grid",
    gridColumnGap: `2px`,
    gridRowGap: `2px`,
    gridTemplateColumns: `repeat(auto-fill, ${size}px)`,
    // gridTemplateColumns: `repeat(auto-fill, 100px)`,
    // gridTemplateColumns: `repeat(auto-fill)`,
    // gridTemplateRows: `repeat(auto-fill, 100px)`,
  }
}

function Cell({ children, ...props }) {
  const [mouse_is, set_mouse_is] = useState(false);
  useEffect(() => {
    set_mouse_is(mouse_is)
  }, [mouse_is])

  const [is, set_is] = useState(false);

  useEffect(() => {
    set_is(is);
  }, [is])

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
        <GatsbyImage image={children.childImageSharp.gatsbyImageData}/>
        {/* {<Img fluid={children.childImageSharp.fluid} />} */}
      </button>
    </div>
  )
}

const GridButton = ({ data }) => {
  let w = 150
  let h = 150

  return (
    <div>
      <Layout title="GRID BUTTON"></Layout>
      <div style={img_grid_style(w)}>
        {data.allFile.edges.map(({ node }) => (
          <Cell w={w} h={h}>
            {node}
          </Cell>
        ))}
      </div>
    </div>
  )
}

export default GridButton;

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "tdm" } }) {
      edges {
        node {
          extension
          relativePath
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width:200, height: 200, placeholder: BLURRED)
            fluid(maxWidth: 200, maxHeight: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
