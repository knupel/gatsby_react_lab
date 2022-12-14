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
