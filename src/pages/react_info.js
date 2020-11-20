import React, { useState, useLayoutEffect, useRef } from "react"
import Layout from "../components/layout"

// in the same mood
// https://reedbarger.com/how-to-create-a-usewindowsize-react-hook/
function set_canvas(canvas) {
  // need that to pass gatsby build
  if (typeof window !== `undefined`) {
    canvas[0] = window.innerWidth
    canvas[1] = window.innerHeight
  }
}

function WindowInfo() {
  let canvas = [0, 0]
  set_canvas(canvas)

  const [window_size, set_size] = useState(canvas)
  useRef(window_size)

  useLayoutEffect(() => {
    function onWindowResize(event) {
      set_canvas(canvas)
      set_size(canvas[0], canvas[1])
    }
    window.addEventListener("resize", onWindowResize)
    return () => {
      window.removeEventListener("resize", onWindowResize)
    }
  }, [])

  return canvas
}

function ReactInfo() {
  let res = WindowInfo()
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
