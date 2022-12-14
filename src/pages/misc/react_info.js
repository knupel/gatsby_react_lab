import React from "react"
import Layout from "../../components/struct/layout"
import { Get_window } from "../../utils/canvas"

function ReactInfo() {
  let res = Get_window()
  return (
    <div>
      <Layout title="REACT INFO"></Layout>
      <div>
        window is {res[0]} x {res[1]}
      </div>
    </div>
  )
}

export default ReactInfo
