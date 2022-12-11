import React from "react"
import Layout from "../../components/layout"
import Video from "../../components/video"
import { Get_window } from "../../utils/canvas"

export default function VideoFullscreen() {
  let canvas = [0, 0]
  canvas = Get_window()
  return (
    <div>
      <Layout title="VIDEO FULLSCREEN"></Layout>
      <Video
        videoSrcURL="https://player.vimeo.com/video/346529123"
        videoTitle="Stress City"
        width={canvas[0].toString() + "px"}
        height={canvas[1].toString() + "px"}
      ></Video>
    </div>
  )
}
