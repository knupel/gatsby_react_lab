// https://github.com/Rob--W/cors-anywhere
// https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9

// https://www.robinwieruch.de/react-hooks-fetch-data

import React, { Fragment, useState, useEffect } from "react";
import { Link } from "gatsby";

import axios from "axios";

import { Paper, TextField } from "@mui/material";
import { styled } from "@mui/material/styles"
// import { makeStyles } from "@mui/styles";

import Layout from "../../components/struct/layout";

const SuperTextField = styled(TextField)`
  color: #20b2aa;
`;
// const search_style = makeStyles(theme => ({
//   root: {
//     padding: "2px 4px",
//     display: "flex",
//     alignItems: "center",
//     width: 400,
//   },
//   input: {
//     // marginLeft: theme.spacing(1),
//     marginLeft: 10,
//     flex: 1,
//   },
//   iconButton: {
//     padding: 10,
//   },
//   divider: {
//     height: 28,
//     margin: 4,
//   },
// }));

function ShowItem(props) {
  let alt_name = "url img: " + props.url_img_medium;
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
  );
}

function GetList({ children }) {
  if (children.show.image !== null) {
    return (
      <div key={children.show.id}>
        <ShowItem
          name={children.show.name}
          url_site={children.show.url}
          url_img_medium={children.show.image.medium}
          resume={children.show.summary}
        />
      </div>
    );
  } else {
    return <></>;
  }
}

function RenderShow({ children }) {
  console.log("children shows", children);
  if (children !== null && Array.isArray(children)) {
    return (
      <div>
        {children.map(item => (
          <div key={item.show.id}>
            <GetList>{item}</GetList>
          </div>
        ))}
      </div>
    );
  } else {
    return <></>;
  }
}

export default function ApiPublic() {
  // const style = search_style();
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("england");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.tvmaze.com/search/shows?q=${query}`
        // `https://cors-anywhere.herokuapp.com/https://api.tvmaze.com/search/shows?q=${query}`
      );
      setData(result.data);
    };

    fetchData();
  }, [query]);

  console.log("query:", query);
  return (
    <div>
      <Layout title="API PUBLIC RESEARCH with AXIOS" link="true"></Layout>
      <Fragment>
      <Paper component="form">
          <SuperTextField
            id="filled-search"
            label="Search field"
            type="search"
            variant="filled"
            onChange={event => setQuery(event.target.value)}
          />
        </Paper>
        <div>
          <RenderShow>{data}</RenderShow>
        </div>
      </Fragment>
    </div>
  );
}


export const Head = () => {
	<>
		<title>API</title>
		<meta name="author" content="Knupel" />
		<meta name="description" content="Mon petit laboratoire pour tester mes fonction react / gatsby / javascript" />
	</>
}
// export default function ApiPublic() {
//   const style = search_style();
//   const [data, setData] = useState({ hits: [] });
//   const [query, setQuery] = useState("england");

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios(
//         `https://api.tvmaze.com/search/shows?q=${query}`
//         // `https://cors-anywhere.herokuapp.com/https://api.tvmaze.com/search/shows?q=${query}`
//       );
//       setData(result.data);
//     };

//     fetchData();
//   }, [query]);

//   console.log("query:", query);
//   return (
//     <div>
//       <Layout title="API PUBLIC RESEARCH with AXIOS" link="true"></Layout>
//       <Fragment>
//         <Paper component="form" className={style.root}>
//           <TextField
//             className={style.input}
//             id="filled-search"
//             label="Search field"
//             type="search"
//             variant="filled"
//             onChange={event => setQuery(event.target.value)}
//           />
//         </Paper>
//         <div>
//           <RenderShow>{data}</RenderShow>
//         </div>
//       </Fragment>
//     </div>
//   );
// }
