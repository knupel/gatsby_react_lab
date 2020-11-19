import React from "react"
import Layout from "../components/layout"
import Video from "../components/video"

export default function VideoFullscreen() {
  // console.log(window.innerWidth)
  // componentDidMount()
  // const module = typeof window !== `undefined` ? require("module") : null
  return (
    <div>
      <Layout title="VIDEO FULLSCREEN"></Layout>
      <Video
        videoSrcURL="https://player.vimeo.com/video/346529123"
        videoTitle="Stress City"
        // width={window.innerWidth.toString()}
        // height={window.innerHeight.toString()}
      ></Video>
    </div>
  )
}
