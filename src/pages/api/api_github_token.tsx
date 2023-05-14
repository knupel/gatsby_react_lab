// REACT
import React from "react"
import { useState, useRef } from "react";
// APP
import Layout from "../../components/struct/layout"
import "../../styles/api_github_token.css";

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


// DRAG & DROP ZONE
// https://www.codemzy.com/blog/react-drag-drop-file-upload

export default function ApiGithubToken() {
  return (
    <div>
      <Layout
        title="Upload file with Github API"
        link="true"
      >
      </Layout>
      <p>Select your file to upload in Github. UPLOAD TO... where you want if you've the owner permission. Here we use API GITHUB with temporary token</p>
      <FileUpload/>
      <br/><br/>
      <DragDropFileUpload/>
      
    </div>
  )
}

// DRAG and DROP
///////////////////
const DragDropFileUpload = () => {
  // https://www.codemzy.com/blog/react-drag-drop-file-upload
  const [drag_is, set_drag_is] = useState(false);
  const input_ref = useRef<HTMLInputElement>(null);

  // style
  const label_file_upload = {
    height: "150px",
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "1rem",
    border: "solid 4px purple",
    background: 'magenta', // cause bug in VS code, but compilation is good
    textAlign: "center", // cause bug in VS code, but compilation is good
  }

  if(drag_is) {
    label_file_upload.background = "cyan";
  } else {
    label_file_upload.background = "magenta";
  }

  // handle drag events
  const handle_drag = function(e: { preventDefault: () => void; stopPropagation: () => void; type: string; }) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      set_drag_is(true);
      return;
    }
    if (e.type === "dragleave") {
      set_drag_is(false);
      return;
    }
  };

  // triggers when file is dropped
  const handle_drop = function(e : any) {
    e.preventDefault();
    e.stopPropagation();
    set_drag_is(false);
    upload_github(e);
  };

  // triggers when file is selected with click
  const handle_change = function(e: any) {
    e.preventDefault();
    upload_github(e);
  };

  // triggers the input when the button is clicked
  const button_click = () => {
    if(input_ref.current !== null) {
      input_ref.current.click();
    }
  };

  return <>
    <h3>NEW SCHOOL STYLE to upload file inspired by Codemzy code</h3>
    <input ref={input_ref} type="file" id="input_file_upload" multiple={true} onChange={handle_change}/>
    <label onDragEnter={handle_drag} onDragLeave={handle_drag} onDragOver={handle_drag} onDrop={handle_drop} style={label_file_upload} htmlFor="input_file_upload">
      <div>
        <h4>Drag and drop your files or</h4>
        <button className="upload_button" onClick={button_click}>Click to select files</button>
      </div>
    </label>
  </>
}



// UPLOAD TO... where you want if you've the permission, here we use API GITHIB with temporary token
//////////////////////////////
const FileUpload = () => {
  return <>
    <h3>OLD SCHOOL STYLE</h3>
    <input type="file" name="input"  multiple={true} onChange={(event) => upload_github(event)}/>
  </>
}




// FUNCTION
///////////////////
function upload_github(event:any) {
  if(event !== undefined ) {
    if(event.target !== undefined && event.target.type === "file") {
      for(let i = 0 ; i < event.target.files.length ; i++) {
        const file =  event.target.files[i];
        upload_file_github(file);
      }
      return;
    }
    if(event.dataTransfer !== undefined) {
      for(let i = 0 ; i < event.dataTransfer.files.length ; i++) {
        const file =  event.dataTransfer.files[i];
        upload_file_github(file);
      }
      return;
    }
  }
}

function upload_file_github(file : Blob) {
  const reader = new FileReader();
  if (file) {
    reader.readAsDataURL(file);
  }

  reader.addEventListener("load", () => {
    const git= {
      owner : 'knupel',
      repo: 'gatsby_react_lab',
      path: `media/test/`+file.name,
      token: process.env.GATSBY_TOKEN_GITHUB,
    }
    upload_file_github_impl(git , reader.result);
  }, false);
}

const upload_file_github_impl = async (git: { owner: string; repo: string; path: string; token: string | undefined; }, data: any) => {
  let final_path = `https://api.github.com/repos/${git.owner}/${git.repo}/contents/${git.path}`;
  const regex = /data:.*base64,/;
  
  const res = await fetch(final_path,
    {
      method: "PUT",
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${git.token}`
      },
      body: JSON.stringify({
        message: "Téléversement de votre fichier",
        // content: data.split('base64,')[1], // same as replace with regex
        content: data.replace(regex,""),
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

