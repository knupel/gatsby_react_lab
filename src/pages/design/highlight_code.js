import React, { useEffect } from "react"
import Layout from "../../components/struct/layout"

import Prism from "prismjs";


function Code({content, language}) {
	useEffect(() => {
    Prism.highlightAll();
  }, []);
	return (
		<div style={{margin: "40px 15px"}}>
			<div className="Code">
				<p> Code syntax block <strong>{language}</strong></p>
				<pre>
        <code className={`language-${language}`}>{content}</code>
      </pre>
			</div>
		</div>
	)

}


export default function HighlightCode() {
	const code_javascript = `
	const Compilation = props => {
		return (
			<div>
				<h1>Knupel is a Punk </h1>
				<div>a funky rotten code is bone for a smart guy</div>
			</div>
		);
	};
	`;

	const code_processing = `
	void setup() {
		size(640,480,P3D);
	}
	
	void draw() {
		background(0);
		circle(mouseX,mouseY, 30);
		noStroke();
		fill(255,0,0);
	}
	`;

	const code_stan = `
	# install

	To install highlight syntax in Gatsby context, follow the line

	> npm install prismjs
	> npm install babel-plugin-prismjs

	// https://www.npmjs.com/package/babel-plugin-prismjs
	
	> npm install --save-dev @types/prismjs
	> npm install --save-dev @babel/plugin-proposal-decorators
	> npm install --save-dev babel-preset-gatsby
	> npm install

	# create file

	create ".babelrc" and add it to the root of your project and the below content

	{
		"plugins": [
			["@babel/plugin-proposal-decorators", { "legacy": true }],
			["prismjs", {
					"languages": ["javascript", "css", "markup"],
					"plugins": ["line-numbers"],
					"theme": "okaidia",
					"css": true
			}],
		],
		"presets": [
			[
				"babel-preset-gatsby",
				{
					"targets": {
						"browsers": [">0.25%", "not dead"]
					}
				}
			]
		]
	}
 
	other language : https://prismjs.com/
	choice theme :  "tomorrow",  "okaidia", "dark", "twilight", "funky"
	plugin : "line-numbers", "show-invisibles"
	`


  return (
		<div>
			<Layout title="Highlight your code with Prism to magnify it"/>
			<Code content={code_javascript} language={"javascript"}/>
			<Code content={code_processing} language={"processing"}/>
			<Code content={code_stan} language={"stan"}/>
		</div>
	)
}