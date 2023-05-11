// REACT
import React from "react"
import { useState } from "react";
// APP
import Layout from "../../components/struct/layout"

// https://github.com/settings/tokens/new
// https://docs.github.com/en/rest/repos/contents?apiVersion=2022-11-28#create-or-update-file-contents
// https://levelup.gitconnected.com/how-to-upload-images-to-github-via-javascript-59163b8fff27
// https://medium.com/axlewebtech/upload-a-file-in-github-using-github-apis-dbb6f38cc63
// https://stackoverflow.com/questions/62729099/react-get-the-input-type-file-value
// https://stackoverflow.com/questions/41453224/uploading-a-file-with-reactjs-and-dealing-with-c-fakepath-file
// https://developer.mozilla.org/en-US/docs/Web/API/FormData
export default function ApiGithubToken() {
  const [name, setName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const load = e => {
    
    console.log("event.target.value", e.target.value);
    console.log("event.target.files", e.target.files);

    if(e.target !== null) {
      let files = e.target.files;
      if(files.length > 0) {
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (e) => {
          console.log('data: ', e.target.result);
        };
        setSelectedFile(e.target.value);
        // setSelectedFile(e.target.value);
        console.log("selectedFile", selectedFile);
    }
   

    }


    // cause crash
    // const selectedFile = event.target.input.files[0];
    //     console.log('Selected File', selectedFile);
    //     var data = new FormData();
    //     data.append('file', selectedFile);
    //     console.log('Form Data', data);

    // cause a crash
    // if (event.target.input.files.length) {
    //   console.log("event", event.target.input.files[0]);
    // }
  }
  return (
    <div>
      <Layout
        title="API Github token"
        link="true"
      >
      </Layout>
      <form>
      {/* <form onSubmit={load}> */}
        <p>Sélectionner le fichier à déposer sur Github</p>
        <p>Select your file to upload in Github</p>
        <input type="file" name="input" onChange={load}/>
        <br/>
        <br/>
        <button type="submit">CHARGEZ</button>
      </form>
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
function uploadImage(data) {
  return fetch(
    `https://api.github.com/repos/${data.owner}/${data.repo}/contents/${data.name}`,
    {
      method: "PUT",
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${data.token}`
      },
      body: JSON.stringify({
        message: "Téléversement de votre fichier",
        content: data.content
      })
    }
  ).then((res) => res.json());
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

