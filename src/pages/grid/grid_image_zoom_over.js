import React from "react"
import { useState, Fragment } from "react"

import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../../components/struct/layout"

// https://w3bits.com/css-image-hover-zoom/

const img_grid_style = {
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, minmax(250px, 1fr))`,
}


function ImageZoom ({data}) {
	const [is_over, set_is_over] = useState(false);

	const mouse_enter = () => {
		set_is_over(true);
	};
	const mouse_leave = () => {
		set_is_over(false);
	};
	const wrapper_style = {
		overflow: 'hidden',
	};

	const image_style = {
		transition: 'transform 3s ease, filter 1s ease-in-out',
		transform: is_over ? 'scale(1.5)' : 'scale(1.0)',
		cursor: 'pointer',
	};

	return (
		<>
			<div style={wrapper_style}>
				<div style={image_style} 
						onMouseEnter={mouse_enter}
						onMouseLeave={mouse_leave}>
					<GatsbyImage image={data} />
				</div>
			</div>
		</>
	)
}

export default function image_grid_zoom_over({ data }) {
  return (
    <div>
      <Layout title="IMAGE GRID ZOOM OVER"></Layout>
				<div style={img_grid_style}>
					{data.allImageSharp.edges.map(edge => (
						<ImageZoom data={edge.node.gatsbyImageData}/>
					))}
				</div>
    </div>
  )
}

// here we write the width and the height twice bigger of the size for the case where the div must be scale by the grid
export const query = graphql`
  query {
    allImageSharp {
      edges {
        node {
          gatsbyImageData(height: 500, width: 500, placeholder: BLURRED, transformOptions :{fit : COVER}, quality: 90)
        }
      }
    }
  }
`