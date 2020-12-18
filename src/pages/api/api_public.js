// https://github.com/Rob--W/cors-anywhere
// https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9

// https://www.robinwieruch.de/react-hooks-fetch-data

import React, { Fragment, useState, useEffect } from "react"
import { Link } from "gatsby"

import axios from "axios"

import SearchIcon from "@material-ui/icons/Search"
import { Paper, TextField, IconButton } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import Layout from "../../components/layout"
const search_style = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}))

function Show_item(props) {
  let alt_name = "url img: " + props.url_img_medium
  return (
    <div>
      <div>{props.name}</div>
      <div>
        <a href={props.url_site}>see the web site</a>
      </div>

      <Link to="/api/api_public_result/" state={{ info: "et voilà" }}>
        <img alt={alt_name} src={props.url_img_medium} />
      </Link>
    </div>
  )
}

function Get_list({ children }) {
  if (children.show.image !== null) {
    return (
      <li key={children.show.id}>
        <Show_item
          name={children.show.name}
          url_site={children.show.url}
          url_img_medium={children.show.image.medium}
          resume={children.show.summary}
        />
      </li>
    )
  } else {
    return <></>
  }
}

function Render_show({ children }) {
  console.log("children shows", children)
  if (typeof children !== null && Array.isArray(children)) {
    return (
      <div>
        {children.map(item => (
          <li key={item.show.id}>
            {/* <a href={item.show.url}>{item.show.name}</a> */}
            <Get_list>{item}</Get_list>
          </li>
        ))}
      </div>
    )
  } else {
    return <></>
  }
}

export default function Api_public() {
  const style = search_style()
  const [data, setData] = useState({ hits: [] })
  const [query, setQuery] = useState("england")

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.tvmaze.com/search/shows?q=${query}`
        // `https://cors-anywhere.herokuapp.com/https://api.tvmaze.com/search/shows?q=${query}`
        // `https://hn.algolia.com/api/v1/search?query=${query}`
      )
      setData(result.data)
    }

    fetchData()
  }, [query])

  console.log("query:", query)
  return (
    <div>
      <Layout title="API PUBLIC RESEARCH with AXIOS" link="true"></Layout>
      <Fragment>
        <Paper component="form" className={style.root}>
          <TextField
            className={style.input}
            id="filled-search"
            label="Search field"
            type="search"
            variant="filled"
            onChange={event => setQuery(event.target.value)}
          />
        </Paper>
        <ul>
          {/* <Render_hits>{data}</Render_hits> */}
          <Render_show>{data}</Render_show>
        </ul>
      </Fragment>
    </div>
  )
}

// function Render_hits({ children }) {
//   console.log("children hits", children)
//   if (typeof children.hits !== "undefined") {
//     return (
//       <div>
//         {children.hits.map(item => (
//           <li key={item.objectID}>
//             <a href={item.url}>{item.title}</a>
//           </li>
//         ))}
//       </div>
//     )
//   } else {
//     return <></>
//   }
// }
