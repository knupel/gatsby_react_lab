// https://github.com/Rob--W/cors-anywhere
// https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9

import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import SearchIcon from "@material-ui/icons/Search"
import { Paper, TextField, IconButton } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import Layout from "../../components/layout"

function Show_item(props) {
  let alt_name = "url img: " + props.url
  return (
    <div>
      <div>{props.name}</div>
      <Link to="/api/api_public_result/" state={{ info: "et voilà" }}>
        {/* React-Router-dom style
      <Link to={{ pathname: "/result", state: { name: "et voilà" } }}> */}
        <img alt={alt_name} src={props.url} />
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
          url={children.show.image.medium}
          resume={children.show.summary}
        />
      </li>
    )
  } else {
    return <></>
  }
}

function Research(props) {
  const [error, set_error] = useState(null)
  const [is_loaded, set_is_loaded] = useState(false)
  const [show, set_show] = useState([])

  let root =
    "https://cors-anywhere.herokuapp.com/https://api.tvmaze.com/search/shows?q="

  const [what, set_what] = useState(root + props.search)

  // there is probleme beacause the research don't stop n the console...very weaird
  useEffect(() => {
    set_what(root + "france")
    // set_what(root + props.search);
    console.log("Research() what: ", what)
    fetch(what)
      .then(res => res.json())
      .then(
        result => {
          set_is_loaded(true)
          console.log(result)
          set_show(result)
        },
        error => {
          set_is_loaded(true)
          set_error(error)
        }
      )
    //});
  }, []) // normally we need that, but if I use that's work so bad :(

  // computing
  if (error) {
    return (
      <div>
        <div>tu cherchais: {props.search}</div>
        <div>Essaye encore mec : {error.message}</div>
      </div>
    )
  } else if (!is_loaded) {
    return <div>Chargement...</div>
  } else {
    return (
      <div>
        {show.map(item => (
          <Get_list>{item}</Get_list>
        ))}
      </div>
    )
  }
}

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

export default function Api_public() {
  const style = search_style()

  const [what, set_what] = useState(null)

  const get_input = event => set_what(event.target.value)

  // console.log("Search() input", what);

  return (
    <div>
      <Layout title="API PUBLIC RESEARCH" link="true"></Layout>
      <Paper component="form" className={style.root}>
        <TextField
          className={style.input}
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
          onChange={get_input}
        />
        {/* <IconButton
          type="submit"
          className={style.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton> */}
      </Paper>
      <br />
      <Research search={what}></Research>
    </div>
  )
}
