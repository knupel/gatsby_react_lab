/**
 * VIDEO
 * 2021-2022
 * v 0.1.0
 * */

import React from "react";

export function Video ({ videoSrcURL, videoTitle, width, height }) {
  return (
    <div className="video">
      <iframe
        src={videoSrcURL}
        title={videoTitle}
        width={width}
        height={height}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
    </div>
  )
}
