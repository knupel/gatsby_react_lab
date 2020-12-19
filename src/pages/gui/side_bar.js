import "../../styles/side_bar.css"
import React, { useState, useEffect, Fragment } from "react"
import Layout from "../../components/layout"
import Menu from "../../components/menu"
/* inspired from
https://medium.com/javascript-in-plain-english/create-a-reusable-sidebar-component-with-react-d75cf48a053a 
https://www.youtube.com/watch?v=17g0QZXRfQk
*/
export const Sidebar = ({ width, height, children }) => {
  const [xPosition, setX] = useState(-width)

  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0)
    } else {
      setX(-width)
    }
  }

  useEffect(() => {
    setX(0)
  }, [])
  return (
    <Fragment>
      <div
        className="side_bar"
        style={{
          transform: `translatex(${xPosition}px)`,
          width: width,
          minHeight: height,
        }}
      >
        <button
          onClick={() => toggleMenu()}
          className="toggle_menu"
          style={{
            transform: `translate(${width}px, 20vh)`,
          }}
        >
          <></>
        </button>
        <div className="content">{children}</div>
      </div>
    </Fragment>
  )
}

function ShowBar() {
  return (
    <div>
      <Sidebar width={300} height={"100vh"}>
        <Layout title="SIDE BAR"></Layout>
        <Menu />
      </Sidebar>
    </div>
  )
}

export default ShowBar
