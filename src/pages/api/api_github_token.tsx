// REACT
import React from "react"
// APP
import Layout from "../../components/struct/layout"

// https://levelup.gitconnected.com/how-to-upload-images-to-github-via-javascript-59163b8fff27

// TOKEN
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

// GITHUB DISCUSSION
// https://github.com/orgs/community/discussions
// https://docs.github.com/en/rest/repos/contents?apiVersion=2022-11-28#create-or-update-file-contents
// https://docs.github.com/fr/rest/repos/contents?apiVersion=2022-11-28#get-repository-content

// HTML message
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages

// base64 is not valid 
// https://github.com/orgs/community/discussions/41150
// https://stackoverflow.com/questions/22952491/github-api-responding-with-content-is-not-valid-base64

export default function ApiGithubToken() {
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
  if(event !== undefined && event.target.type === "file") {
    const file =  event.target.files[0];
    console.log("file",file);
    console.log("file.name",file.name);
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
    }

    reader.addEventListener("load", () => {
      const git= {
        owner : 'knupel',
        repo: 'gatsby_react_lab',
        // path: `media/test`,
        path: `media/test/`+file.name,
        token: process.env.GATSBY_TOKEN_GITHUB,
      }
      // const regex = /data:.*base64,/;
      // let res = reader.result;
      // upload_file(git , res.replace(regex,""));
      upload_file(git , reader.result);
    }, false);
  }
}

const upload_file = async (git: { owner: string; repo: string; path: string; token: string | undefined; }, data: any) => {
  let final_path = `https://api.github.com/repos/${git.owner}/${git.repo}/contents/${git.path}`;
  // console.log("git.path", git.path);
  console.log("before data", data);
  const regex = /data:.*base64,/;
 // data.replace(regex,"");
  // console.log("after data", data);
  const res = await fetch(final_path,
    {
      method: "PUT",
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${git.token}`
      },
      body: JSON.stringify({
        message: "Téléversement de votre fichier",
        // content: data.content, // Invalid request.\n\n"content" wasn't supplied.
       // content: data.split('base64,')[1] // Invalid request."sha" wasn't supplied.
       content: data.replace(regex,""), // Invalid request."sha" wasn't supplied.
       // content: data // content is not valid Base64
        
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

