import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

const set_button_style = (w, h, alpha) => {
  return {
    opacity: alpha,
    width: `${w}px`,
    height: `${h}px`,
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

// function Cell({ children }, props) {
//   const [w, set_w] = useState(100)
//   const [h, set_h] = useState(100)
//   const toggle_cell = () => {
//     console.log("toggle")
//     if (w == 100) {
//       set_w(200)
//       set_h(200)
//     } else {
//       set_w(100)
//       set_h(100)
//     }
//   }

//   const [alpha, set_alpha] = useState(0.5)
//   const mouse_in = () => {
//     set_alpha(1)
//   }
//   const mouse_out = () => {
//     set_alpha(0.5)
//   }

//   return (
//     <div>
//       <button
//         onClick={toggle_cell}
//         onMouseEnter={mouse_in}
//         onMouseLeave={mouse_out}
//         className="cell"
//         style={set_button_style(w, h, alpha)}
//       >
//         {<Img fluid={children.childImageSharp.fluid} />}
//       </button>
//     </div>
//   )
// }
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
  const [w, set_w] = useState(props.w)
  const [h, set_h] = useState(props.h)

  // useEffect(() => {
  //   set_w(props)
  //   set_h(props)
  // }, [props])

  const toggle_cell = () => {
    console.log("toggle")
    if (w == 100) {
      set_w(200)
      set_h(200)
    } else {
      set_w(100)
      set_h(100)
    }
  }

  const [alpha, set_alpha] = useState(0.5)
  const mouse_in = () => {
    set_alpha(1)
  }
  const mouse_out = () => {
    set_alpha(0.5)
  }

  return (
    <div>
      <button
        onClick={toggle_cell}
        onMouseEnter={mouse_in}
        onMouseLeave={mouse_out}
        className="cell"
        style={set_button_style(w, h, alpha)}
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
