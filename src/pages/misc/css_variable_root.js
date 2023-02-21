import React from "react";
import { useState } from "react";
import Layout from "../../components/struct/layout";


/**
 * https://blog.greenroots.info/gatsby-the-window-is-not-defined-error-what-and-how-to-fix-it
 * need to check if the window is available before use document, if we don't do that that's failed to the building phase
 */

function CssVarRoot() {
	const [variables, set_variables] = useState([]);
	const isBrowser = typeof window !== "undefined";

	if(variables.length === 0 && isBrowser) {
		let buf = Array.from(document.styleSheets)
		.filter( sheet => sheet.href === null || sheet.href.startsWith(window.location.origin))
		.reduce(
			(acc, sheet) =>
				(acc = [
					...acc,
					...Array.from(sheet.cssRules).reduce(
						(def, rule) =>
							(def =
								rule.selectorText === ":root"
									? [
											...def,
											...Array.from(rule.style).filter(name => 
												name.startsWith("--")				
											)
										]
									: def),
						[]
					)
				]),
			[]
		);

		buf.map((elem) => {
			let value = getComputedStyle(document.documentElement).getPropertyValue(elem);
			const obj = {
				name : elem,
				value : value,
			};
			variables.push(obj);
			set_variables(variables);
		})
	}


	const render_list = (list) => {
		if(list !== undefined) {
			return list.map((elem,index) => <div>{elem.name}: {elem.value}</div>);
		} else return null;	
	}
	


  return (
    <div>
      <Layout title="catch the css globales variables :root --my_var to use in your app"></Layout>
      <div>
				{render_list(variables)}
      </div>
    </div>
  )
}


export default CssVarRoot;
