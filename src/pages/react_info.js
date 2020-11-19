import React, { useState, useLayoutEffect, useRef } from "react"

// to pass gatsby built
function MyComponent() {
  let w
  let h

  if (typeof window !== `undefined`) {
    w = window.innerWidth
    h = window.innerHeight
  }

  const [windowSize, _setWindowSize] = useState([w, h])
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
      if (typeof window !== `undefined`) {
        w = window.innerWidth
        h = window.innerHeight
      }
      // And set the state value like this
      setWindowSize([h, w])
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

// gatsby develope
// function MyComponent() {
//   const [windowSize, _setWindowSize] = useState([
//     window.innerWidth,
//     window.innerHeight,
//   ])
//   const windowSizeRef = useRef(windowSize)

//   const setWindowSize = value => {
//     windowSizeRef.current = value
//     _setWindowSize(value)
//   }

//   // Here we can normally use setWindowSize([x,y]) and windowSize

//   useLayoutEffect(() => {
//     function onWindowResize(event) {
//       // You can access the state value like this
//       let windowSizeValue = windowSizeRef.current

//       // And set the state value like this
//       setWindowSize([window.innerWidth, window.innerHeight])
//     }

//     window.addEventListener("resize", onWindowResize)

//     return () => {
//       window.removeEventListener("resize", onWindowResize)
//     }
//   }, [])
//   // }

//   return (
//     <div>
//       Hi There, screen is {windowSize[0]} x {windowSize[1]}
//     </div>
//   )
// }

export default MyComponent
