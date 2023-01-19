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


export default function DestructuringCode() {
	const code_0 = `
	let a, b, rest;
	[a, b] = [10, 20];
	console.log(a); // 10
	console.log(b); // 20

	[a, b, ...rest] = [10, 20, 30, 40, 50];
	console.log(a); // 10
	console.log(b); // 20
	console.log(rest); // [30, 40, 50]

	({a, b} = {a: 10, b: 20});
	console.log(a); // 10
	console.log(b); // 20

	// Proposition de syntaxe (niveau 4)
	({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
	console.log(a); // 10
	console.log(b); // 20
	console.log(rest); // {c: 30, d: 40}

	`;

	const code_1 = `
	let a, b, rest;
	[a, b] = [10, 20];

	console.log(a);
	// Expected output: 10

	console.log(b);
	// Expected output: 20

	[a, b, ...rest] = [10, 20, 30, 40, 50];

	console.log(rest);
	// Expected output: Array [30, 40, 50]
	`


  return (
		<div>
			<Layout title="Destructuring array can save your life !!!"/>
			<Code content={code_0} language={"javascript"}/>
			<Code content={code_1} language={"javascript"}/>
		</div>
	)
}