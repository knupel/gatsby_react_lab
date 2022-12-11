import React from "react";
/**
 *  To use module CSS need to invoke in the brace each components of this one
 */
import { base, test } from "../styles/container.module.css";

export function Test({ children }) {
  return <div className={test}>{children}</div>;
}

export default function Container({ children }) {
  return <div className={base}>{children}</div>;
}
