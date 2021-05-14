import React from "react"

// site
import Layout from "../../components/layout"

// Processing
import P5Wrapper from "../../components/p5_wrapper"

export default function () {
  return (
    <div>
      <div style={{ position: "absolute" }}>
        <Background />
      </div>
      <div style={{ position: "absolute" }}>
        <Layout title="simple background in P5"></Layout>
      </div>
    </div>
  )
}

function Background() {
  return <P5Wrapper sketch={sketch}></P5Wrapper>
}

function sketch(p) {
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight)
    p.colorMode(p.HSB, 1, 1, 1, 1)

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight)
    }
  }

  p.draw = function () {
    let hue = p.abs(p.sin(p.frameCount * 0.001))
    p.background(hue, 1, 1)
  }
}
