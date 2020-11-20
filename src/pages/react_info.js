import React, { useState, useLayoutEffect, useRef } from "react"
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

  const [windowSize, _setWindowSize] = useState(canvas)

  const windowSizeRef = useRef(windowSize)
  const setWindowSize = value => {
    windowSizeRef.current = value
    _setWindowSize(value)
  }

  // Here we can normally use setWindowSize([x,y]) and windowSize

  useLayoutEffect(() => {
    function onWindowResize(event) {
      // You can access the state value like this
      let windowSizeValue = windowSizeRef.current
      set_canvas(canvas)
      // And set the state value like this
      setWindowSize([canvas[0], canvas[1]])
    }

    window.addEventListener("resize", onWindowResize)

    return () => {
      window.removeEventListener("resize", onWindowResize)
    }
  }, [])
  // }

  return (
    <div>
      Hi There, screen is {windowSize[0]} x {windowSize[1]}
    </div>
  )
}

function ReactInfo() {
  return WindowInfo()
}
export default ReactInfo
