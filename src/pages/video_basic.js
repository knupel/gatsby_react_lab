import React from "react"
import Layout from "../components/layout"
import Video from "../components/video"

const VideoShow = () => (
  <div>
    <Layout title="VIDEO basic from Vimeo iframe"></Layout>
    <iframe
      src="https://player.vimeo.com/video/346529123"
      width="640"
      height="360"
      frameborder="0"
      allow="autoplay; fullscreen"
      allowfullscreen
    ></iframe>
    <p>
      <a href="https://vimeo.com/346529123">Stress City</a> from{" "}
      <a href="https://vimeo.com/user16686520">Stan le Punk</a> on{" "}
      <a href="https://vimeo.com">Vimeo</a>.
    </p>

    <Layout title="VIDEO from personal component"></Layout>
    <Video
      videoSrcURL="https://player.vimeo.com/video/346529123"
      videoTitle="Stress City"
      width="320"
      // height="240"
    ></Video>
  </div>
)

export default VideoShow

{
  /* <iframe src="https://player.vimeo.com/video/346529123" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
<p><a href="https://vimeo.com/346529123">Stress City</a> from <a href="https://vimeo.com/user16686520">Stan le Punk</a> on <a href="https://vimeo.com">Vimeo</a>.</p> */
}
