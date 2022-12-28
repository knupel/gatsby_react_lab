/**
 * VIDEO FULLSCREEN
 * 2021-2022
 * v 0.1.0
 * */
// REACT
import React from "react"
import { useState, useRef, useEffect} from "react";
// APP
import Layout from "../../components/struct/layout"
import { Video } from "../../components/video"
import { GetWindow } from "../../utils/canvas"

export default function VideoFullscreen() {
  const ref = useRef(null);
  let canvas = {width:0, height:0}
  canvas = GetWindow();

  // now we need to this strnage code, to update the canvas size very weird.
  const [value, set_value] = useState({x:0,y:0});
  const update = () => {
    if(ref.current !== null) {
      set_value({x: ref.current.offsetLeft, y: ref.current.offsetTop});
    }
  };
  useEffect(() => {
    update();
  }, []);

  return (
    <div>
      <Layout title="VIDEO FULLSCREEN to the max of the video size"></Layout>
      <div ref={ref}>
        <Video
          videoSrcURL="https://player.vimeo.com/video/346529123"
          videoTitle="Stress City"
          width={canvas.width.toString() + "px"}
          height={canvas.height.toString() + "px"}
        ></Video>
      </div>
    </div>
  )
}
