/**
 * QuerySelector
 * 2023-2023
 * v 0.0.1
 * 
*/
// REACT
import React from "react";
import {useRef, useEffect, useState} from 'react';
// APP
import Layout from "../../components/struct/layout"

export default function QuerySelector() {
  const ref = useRef(null);
  const [value, set_value] = useState(null);
  useEffect(() => {
    // 👇️ use a ref (best)
    const elem_by_ref = ref.current;
    console.log(elem_by_ref);

    // 👇️ use document.querySelector()
    // should only be used when you can't set a ref prop on the element
    // (you don't have access to the element)
    const elem_by_query = document.querySelector('#container');
    console.log(elem_by_query);
    set_value(elem_by_query);
  }, []);

  if(value !== null) {
    console.log("value", value);
  }

  return (
    <div>
      <Layout title="QuerySelector versus React ref"></Layout>
      <div ref={ref} id="container">
        <a href="https://bobbyhadz.com/blog/react-document-queryselector">https://bobbyhadz.com/blog/react-document-queryselector</a>
        }
      }
      </div>
    </div>
  )
}
