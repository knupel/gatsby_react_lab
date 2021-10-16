import React from "react";
/**
 * add .module  like file.module.css at the end of file make something interesting but why ????
 */
// import container from "../styles/container.css"
import container from "../styles/container.module.css";

export function Test({ children }) {
  if (container === undefined)
    return <div>container.module.container css is undefined</div>;
  return <div className={container.test}>{children}</div>;
}

export default function Container({ children }) {
  if (container === undefined)
    return <div>container.module.container css is undefined</div>;
  return <div className={container.container}>{children}</div>;
}
