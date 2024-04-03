/**
 * NAV MOTION 
 * fade in and transition
 * 2021-2022
 * v 0.0.1
 * 
*/
import React from "react"
import {useState, useRef, useEffect} from 'react';
// APP
import Layout from "../../components/struct/layout"
// CSS
import './nav_motion.css';

// https://stackoverflow.com/questions/59595700/how-to-make-a-react-component-fade-in-on-scroll-using-intersectionobserver-but
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
// https://www.webtips.dev/webtips/react-hooks/element-in-viewport
const useRandomColor = () => {
  const [color,set_color] = useState("fff")
  const generate_color = () =>{
    set_color(Math.random().toString(16).substr(-6));
  };
  return {color,generate_color};
};


  /**
   * 
   * This code wotk but only from the the bottom and from the top, but from the top is not really nice
   * see it's totaly broken
   */
const useIntersection = (ref, marge) => {
  const [visible, set_visible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          set_visible(entry.isIntersecting);
        }, { marge }
    );
    ref.current && observer.observe(ref.current);
    return () => observer.unobserve(ref.current);
  }, []);
  return visible;
}

function Wall() {
  // fade in effect on scroll

  const dom_ref = useRef();
  
  /**
   * 
   * This code wotk but only from the the bottom, but only once
   */
  // const [visible, set_visible] = useState(false);
  // useEffect(() => {
  //   const observer = new IntersectionObserver(entries => {
  //     // console.log("entries", entries);
  //     // console.log("entries[0]", entries[0]);
  //     if(entries[0].isIntersecting) {
  //       set_visible(true);
  //       observer.unobserve(dom_ref.current);
  //       // visible ? set_visible(false) : set_visible(true);
  //       // 
  //     } 
  //   });
  //   observer.observe(dom_ref.current);
  //   return () => observer.disconnect();
  // }, []);


  const in_viewport = useIntersection(dom_ref, '-200px');

  const container = {
    display: "grid",
    gridTemplateColumns: `repeat(auto-fit, minmax(100px, 1fr))`,
  }

  const { color, generate_color} = useRandomColor();

  const elem_mag = {
    // background: "magenta",
    background: "#"+color,
    height: "100px",
    padding: "20px",
    color: "yellow",
    border: "1px solid yellow",
  }

  return (
    <div ref={dom_ref} className={ `fade_in ${ in_viewport ? 'visible' : '' }` }>
    {/* <div ref={dom_ref} className={ `fade_in ${ visible ? 'visible' : '' }` }> */}
      <div style={container}>
        <div style={elem_mag} onMouseEnter={generate_color}></div>
      </div>
      <div style={container}>
        <div style={elem_mag}></div>
        <div style={elem_mag}></div>
      </div>
      <div style={container}>
        <div style={elem_mag}></div>
        <div style={elem_mag}></div>
        <div style={elem_mag}></div>
       </div>
       <div style={container}>
        <div style={elem_mag}></div>
        <div style={elem_mag}></div>
        <div style={elem_mag}></div>
        <div style={elem_mag}></div>
      </div>
      <div style={container}>
        <div style={elem_mag}></div>
        <div style={elem_mag}></div>
        <div style={elem_mag}></div>
      </div>
      <div style={container}>
        <div style={elem_mag}></div>
        <div style={elem_mag}></div>
      </div>
      <div style={container}>
        <div style={elem_mag}></div>
      </div>
    </div>
  )
}


export default function NavMotion() {

  return (
    <div>
      <Layout title="NAVIGATION with fade in motion"></Layout>
      <Wall/>
      <Wall/>
      <Wall/>
      <Wall/>
      <Wall/>
      <Wall/>
      <Wall/>    
    </div>
  )
}

