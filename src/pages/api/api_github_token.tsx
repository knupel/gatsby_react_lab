// REACT
import React from "react"
import { useState } from "react";
// APP
import Layout from "../../components/struct/layout"

// https://levelup.gitconnected.com/how-to-upload-images-to-github-via-javascript-59163b8fff27


// https://github.com/settings/tokens/new

// https://docs.github.com/en/rest/repos/contents?apiVersion=2022-11-28#create-or-update-file-contents

// https://medium.com/axlewebtech/upload-a-file-in-github-using-github-apis-dbb6f38cc63
// https://stackoverflow.com/questions/62729099/react-get-the-input-type-file-value

// FAKE PATH
// https://stackoverflow.com/questions/41453224/uploading-a-file-with-reactjs-and-dealing-with-c-fakepath-file
// FORM DATA
// https://developer.mozilla.org/en-US/docs/Web/API/FormData

// 422 Unprocessable Entity pour les fois ou ça charge les données
// https://stackoverflow.com/questions/51255506/postman-error-422-unprocessable-entity-with-github-api-what-is-it-and-how-do

// OCTOKIT
// https://docs.github.com/en/rest/guides/scripting-with-the-rest-api-and-javascript?apiVersion=2022-11-28

export default function ApiGithubToken() {
  // const [name, setName] = useState('');
  const [file, set_file] = useState(null);

  // function set_file() {

  // }

  // console.log("process.env.GATSBY_TOKEN_GITHUB", process.env.GATSBY_TOKEN_GITHUB);
  // console.log("process.env.TYPEKIT_ID", process.env.TYPEKIT_ID);
  // console.log("process.env.GATSBY_GOOGLE_MAP_ID",process.env.GATSBY_GOOGLE_MAP_ID);
  const load = e => {
    
    // console.log("event.target.value", e.target.value);
    // console.log("event.target.files", e.target.files);

    if(e.target !== null) {
      let files = e.target.files;
      if(files.length > 0) {
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (e) => {
          set_file(files[0]);
        }
        // reader.onload = (e) => {
        //   // console.log('data: ', e.target.result);
        //   // set_file(e.target.result);
        //   // const selectedFile = document.getElementById("input").files[0];
        //  if(e.target !== null) {
        //   // set_file(files[0]);
        //   console.log("files[0]", files[0]);
        //  }
          
        // };
        // console.log("file", file);
        // console.log("e.target", e.target);
        // console.log("e.target.files[0]", e.target.files[0]);
        // console.log("e.target.result", e.target.result);
        // console.log("e.target.value", e.target.value);
        if(files[0] !== null) {
          //console.log("selectedFile", file);
          const git= {
            owner : 'knupel',
            repo: 'gatsby_react_lab',
            path: `media/test/`,
            token: process.env.GATSBY_TOKEN_GITHUB,
          }
          // console.log("git", git);
          console.log("files[0]", files[0]);
          console.log("reader", reader);
          upload_file(git, reader);
          // upload_file(git, files[0]);
          // upload_file(git, file);
        }
      }
    }
    // console.log("after file", file)
  }
  return (
    <div>
      <Layout
        title="API Github token"
        link="true"
      >
      </Layout>
      {/* <form> */}
      {/* <form onSubmit={load}> */}
        <p>Sélectionner le fichier à déposer sur Github / Select your file to upload in Github</p>
        <input type="file" name="input" onChange={load}/>
        <br/>
        <br/>
        <button type="submit">CHARGEZ</button>
      {/* </form> */}
      {/* <div>
        <p>Sélectionner le fichier à déposer sur Github</p>
        <p>Select your file to upload in Github</p>
        <input type="file" name="input" onChange={load}/>
        <br/>
        <br/>
        <button type="submit">CHARGEZ</button>
      </div> */}
    </div>
  )
}

// HTTP ACCES
// interface Props {
//   data : any;
//   git: any;

// }
const upload_file = async (git: { owner: string; repo: string; path: string; token: string | undefined; }, data: any) => {
  let final_path = `https://api.github.com/repos/${git.owner}/${git.repo}/contents/${git.path}`;
  // console.log("final_path", final_path);
  // console.log("token", git.token);
  console.log("data", data);
  const res = await fetch(final_path,
    {
      method: "PUT",
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${git.token}`
      },
      body: JSON.stringify({
        message: "Téléversement de votre fichier",
        // content: data,
        content: data.split('base64,')[1]
        // content: data.content
      })
    }
  );
  return await res.json();
}






// Octokit.js
// https://github.com/octokit/core.js#readme
/*
const octokit = new Octokit({
  auth: 'YOUR-TOKEN'
})

await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
  owner: 'OWNER',
  repo: 'REPO',
  path: 'PATH',
  message: 'my commit message',
  committer: {
    name: 'Monalisa Octocat',
    email: 'octocat@github.com'
  },
  content: 'bXkgbmV3IGZpbGUgY29udGVudHM=',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})
*/



export const Head = () => {
	<>
		<title>API Github Token</title>
		<meta name="author" content="Knupel" />
		<meta name="description" content="Mon petit laboratoire pour tester mes fonctions react, gatsby, javascript, typescript" />
	</>
}

