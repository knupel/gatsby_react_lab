import React from "react"
import Layout from "../../components/struct/layout"

export default function Api_public_result() {
  //console.log(data.location.aboutProps.name)
  return (
    <div>
      <Layout
        title="API PUBLIC RESULT"
        link="true"
        to="/api/api_public"
      ></Layout>
      {/* <div>{data.location.aboutProps}</div> */}
      {/* <Link to="/">go home</Link> */}
    </div>
  )
}



export const Head = () => {
	<>
		<title>API resultat</title>
		<meta name="author" content="Knupel" />
		<meta name="description" content="Mon petit laboratoire pour tester mes fonctions react, gatsby, javascript" />
	</>
}
// export default Api_public_result

// export const Api_public_result = () => {
//   //console.log(data.location.aboutProps.name)
//   return (
//     <div>
//       <Layout title="API PUBLIC RESULT" link="true"></Layout>
//       {/* <div>{data.location.aboutProps}</div> */}
//       {/* <Link to="/">go home</Link> */}
//     </div>
//   )
// }

// export default Api_public_result
