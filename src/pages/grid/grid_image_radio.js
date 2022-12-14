import React from "react"
import { Fragment } from "react"

import { createContext, useState, useEffect } from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../../components/struct/layout"

//https://fmontes.com/blog/dynamic-gatsby-images-an-anternative/

// https://stackoverflow.com/questions/31101445/in-react-native-how-do-i-put-a-view-on-top-of-another-view-with-part-of-it-lyi
// https://dev.to/pnkfluffy/passing-data-from-child-to-parent-with-react-hooks-1ji3
// https://www.robinwieruch.de/local-storage-react
// https://redux.js.org/introduction/getting-started
// https://reactjs.org/docs/context.html
// https://milddev.com/react/react-createcontext/

const ContextGridRadio = createContext()
ContextGridRadio.displayName = "context_grid_radio"

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
            width: "200px",
            height: "200px",
            position: "absolute",
          }}
        >
          <GatsbyImage image={children.node.childImageSharp.gatsbyImageData}/>
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

  // console.log("id", children.node.id)

  // rendering
  return (
    <Fragment>
      <button
        onClick={toggle_state}
        onMouseEnter={mouse_state}
        onMouseLeave={mouse_state}
        style={cell_style(over_is)}
      >
        <GatsbyImage image={children[1].node.childImageSharp.gatsbyImageData}/>
      </button>
      <button
        onClick={toggle_state}
        style={{ zIndex: 100, position: "absolute", border: 0, padding: 0 }}
      >
        <Diaporama show_is={toggle_is}>{children[1]}</Diaporama>
      </button>
    </Fragment>
  )
}

export default function GridImageRadio({ data }) {
  const [radio_is, set_radio_is] = useState([])
  let id = 0
  useEffect(() => {
    data.allFile.edges.forEach(elem => {
      set_radio_is(prev_id => [...prev_id, [id++, elem]])
    })
  }, []) // avoid to put the dependencies, if you do your start in loop
  radio_is.forEach(elem => console.log("elem:", elem))

  return (
    <div>
      <Layout title="GRID IMAGE show selected image one by one, like a radio menu"></Layout>
      <ContextGridRadio.Provider value={radio_is}>
        <div style={img_grid_style}>
          {radio_is.map(elem => (
            <Cell>{elem}</Cell>
          ))}
        </div>
      </ContextGridRadio.Provider>
    </div>
  )
  // return (
  //   <div>
  //     <Layout title="GRID IMAGE show selected image one by one, like a radio menu"></Layout>
  //     <Context_grid_radio.Provider value={radio_is}>
  //       <div style={img_grid_style}>
  //         {data.allFile.edges.map(edge => (
  //           <Cell>{edge}</Cell>
  //         ))}
  //       </div>
  //     </Context_grid_radio.Provider>
  //   </div>
  // )
}

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "media_art" } }) {
      edges {
        node {
          extension
          relativePath
          name
          id
          extension
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
    }
  }
`
