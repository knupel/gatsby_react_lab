import React from "react"
import Layout from "../../components/struct/layout"

// https://www.gatsbyjs.com/plugins/gatsby-remark-embedded-codesandbox/
// https://codesandbox.io/docs/learn/getting-started/your-first-sandbox#define-api
// https://github.com/uiwjs/react-codesandbox


const CodeSandbox = () => {
	const style = {
		width: "100%",
		height: "500px",
		border:0, 
		borderRadius: "4px",
		overflow: "hidden",
	}

	return (
		<div>
			<Layout title="Code Sandbox embed"></Layout>
			<div>
				<iframe 
					src="https://codesandbox.io/embed/boucle-2-f81ukk?fontsize=14&hidenavigation=1&theme=dark"
					style={style}
					title="boucle 2"
					allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
					sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
					>
				</iframe>
			</div>
		</div>
 	)
}

export default CodeSandbox;




{/* <iframe src="https://codesandbox.io/embed/boucle-2-f81ukk?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="boucle 2"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe> */}