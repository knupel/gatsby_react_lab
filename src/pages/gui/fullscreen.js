import React, { useState } from "react"
import Layout from "../../components/struct/layout"

function Fullscreen() {
  const [switch_is, get_switch_is] = useState(false)

  const switch_onoff = () => {
    switch_is ? get_switch_is(false) : get_switch_is(true)

    if (switch_is) {
      fullscreen_open(document.documentElement)
    } else {
      fullscreen_close()
    }
  }

  let message = "enable fulscreen"
  if (!switch_is) {
    message = "disable fulscreen"
  }

  return (
    <div>
      <Layout title="Fullscreen page"></Layout>
      <button
        onClick={switch_onoff}
        style={{ width: "100px", height: "100px" }}
      >
        {message}
      </button>
    </div>
  )
}

export default Fullscreen

// you cannot for security reason to avoid the app to deploy a fullScreen against the user will.

/* View in fullscreen */
function fullscreen_open(elem) {
  console.log("fullscreen batard")
  if (elem.requestFullscreen) {
    elem.requestFullscreen()
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen()
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen()
  }
}

/* 
Close fullscreen
Don't work with chrome for the moment
https://stackoverflow.com/questions/2863351/checking-if-browser-is-in-fullscreen
*/
function fullscreen_close() {
  if (document.exitFullscreen) {
    if (window.fullScreen) {
      document.exitFullscreen()
    }

    // if (!window.screenTop && !window.screenY) document.exitFullscreen()
  } else if (document.webkitExitFullscreen) {
    /* Safari */
    document.webkitExitFullscreen()
  } else if (document.msExitFullscreen) {
    /* IE11 */
    document.msExitFullscreen()
  }
}
