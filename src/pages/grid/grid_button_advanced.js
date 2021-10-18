import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../../components/layout";
import { hsb_to_hex } from "../../utils/color_convertor";
import { Get_window } from "../../utils/canvas";
/**
 *  To use module CSS need to invoke in the brace each components of this one
 */
import { gatsbyImageWrapper } from "../../styles/container.module.css";

// GRID PART
const set_button_style = (props, select_is, mouse_is) => {
  let alpha = 0;
  select_is ? (alpha = 1) : (alpha = 0.5);
  let border_is;

  let hex_color = hsb_to_hex(0.5, 1, 0);

  mouse_is ? (border_is = `10px solid ${hex_color}`) : (border_is = `0px`);
  return {
    background: `${hsb_to_hex(0, 0, 0)}`,
    opacity: alpha,
    // This solution show the background of page
    // width: `${props.w}px`,
    // height: `${props.h}px`,

    // This solution show the background of button
    width: `100%`,
    height: `100%`,
    border: border_is,
    padding: `0px`,
    margin: `0px`,
  };
};

const img_grid_style = (size, marge) => {
  return {
    display: "grid",
    //gridTemplateColumns: `repeat(auto-fill, ${size}px)`,
    gridTemplateColumns: `repeat(auto-fill, minmax(${size}px, 1fr))`,
  };
};

function Cell({ children, ...props }) {
  const [is, set_is] = useState(true);
  useEffect(() => {
    set_is(is);
  }, [is]);
  const [mouse_is, set_mouse_is] = useState(false);

  useEffect(() => {
    set_mouse_is(mouse_is);
  }, [mouse_is]);

  const toggle_cell = () => {
    is ? set_is(false) : set_is(true);
  };

  const mouse_state = () => {
    mouse_is ? set_mouse_is(false) : set_mouse_is(true);
  };
  console.log("Cell() cell props", props.w, props.h);
  // if (styles === undefined)
  //   return <div>styles.module.container css is undefined</div>;
  return (
    <div className={gatsbyImageWrapper}>
      {/* <div className={styles.gatsbyImageWrapper}> */}
      <button
        onClick={toggle_cell}
        onMouseEnter={mouse_state}
        onMouseLeave={mouse_state}
        className="cell"
        style={set_button_style(props, is, mouse_is)}
        // style={set_button_style(props.w, props.h, alpha)}
      >
        {
          <Img
            // className="gatsby-image-wrapper"
            // style={{ height: "100%", width: "100%" }}
            // className={container.gatsbyImageWrapper}
            height="100%"
            fluid={children.childImageSharp.fluid}
            // Tag="div"
          />
        }
      </button>
    </div>
  );
}

// FINALIZE PART
function GridButtonAdvanced({ data }) {
  let num_pic_by_col = 3;
  let marge = 0;
  let res = Get_window();

  let val = res[0] - marge * (num_pic_by_col + 1);
  let size_cell = Math.floor(val / num_pic_by_col);

  // console.log("window size", res[0], "cell", size_cell)
  const [cell_width, set_cell_width] = useState(size_cell);
  const [cell_height, set_cell_height] = useState(size_cell);

  if (cell_width !== size_cell) {
    set_cell_width(size_cell);
    set_cell_height(size_cell);
  }
  console.log("GridButtonAdvanced() cell size", cell_width, cell_height);
  return (
    <div>
      <Layout title="GRID BUTTON ADVANCED"></Layout>
      <div>
        There is a bug. I dont find a solution to remove the horizontal line.
      </div>
      <div style={img_grid_style(cell_width, marge)}>
        {data.allFile.edges.map(({ node }) => (
          <Cell w={cell_width} h={cell_height}>
            {node}
          </Cell>
        ))}
      </div>
    </div>
  );
}

export default GridButtonAdvanced;

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
`;
