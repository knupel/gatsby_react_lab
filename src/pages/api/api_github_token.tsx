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

// FILE READER
// https://developer.mozilla.org/fr/docs/Web/API/FileReader/readAsDataURL
export default function ApiGithubToken() {
  // const [file, set_file] = useState(null);

  // const load = e => {
  //   if(e.target !== null) {
  //     let files = e.target.files;
  //     if(files.length > 0) {
  //       let reader = new FileReader();
  //       reader.readAsDataURL(files[0]);
  //       reader.onload = (e) => {
  //         set_file(files[0]);
  //       }
  //       if(files[0] !== null) {
  //         //console.log("selectedFile", file);
  //         const git= {
  //           owner : 'knupel',
  //           repo: 'gatsby_react_lab',
  //           path: `media/test/`,
  //           token: process.env.GATSBY_TOKEN_GITHUB,
  //         }
  //         // console.log("git", git);
  //         console.log("files[0]", files[0]);
  //         console.log("reader", reader);
  //         upload_file(git, reader);
  //         // upload_file(git, files[0]);
  //         // upload_file(git, file);
  //       }
  //     }
  //   }
  //   // console.log("after file", file)
  // }
  return (
    <div>
      <Layout
        title="API Github token"
        link="true"
      >
      </Layout>
      <p>Sélectionner le fichier à déposer sur Github / Select your file to upload in Github</p>
      <input type="file" name="input" onChange={(event) => load(event)}/>
      <br/>
      <br/>
      <button type="submit">CHARGEZ</button>
    </div>
  )
}

function load(event:any) {
  console.log("event",event);
  console.log("event.target",event.target);
  if(event !== undefined && event.target.type === "file") {
    const file =  event.target.files[0];
    console.log("file",file);
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
    }

    reader.addEventListener("load", () => {
      const git= {
        owner : 'knupel',
        repo: 'gatsby_react_lab',
        path: `media/test/`,
        token: process.env.GATSBY_TOKEN_GITHUB,
      }
      // on convertit l'image en une chaîne de caractères base64
      // console.log("reader.result",reader.result);
      upload_file(git , reader.result);
    }, false);
  }

  
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
        content: data,
        // content: data.split('base64,')[1]
        // content: data.content
      })
    }
  );
  return await res.json();
}




export const Head = () => {
	<>
		<title>API Github Token</title>
		<meta name="author" content="Knupel" />
		<meta name="description" content="Mon petit laboratoire pour tester mes fonctions react, gatsby, javascript, typescript" />
	</>
}

