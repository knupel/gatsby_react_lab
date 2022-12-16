/**
 * Button radio
 * v 0.0.1
 * 2022-2022
 * https://www.knupel.art/
 * stan[at]knupel.art
 * 
 * */

////////////////////
///////////////////
// https://www.robinwieruch.de/blog/
// https://www.w3schools.com/react/react_usecontext.asp
//////////////////////////////////////////
///////////////////////////////////////////


import * as React from "react";
import { Fragment } from "react"
import { useState, createContext, useEffect, useContext  } from "react";

// APP part
import Layout from "../../components/struct/layout"

export const RadioContext = createContext();
RadioContext.displayName = "context_button_radio";


const button_style = (over_is, toggle_is) => {
	return {
		width: 20,
		height: 20,
		backgroundColor: over_is ? "yellow" : toggle_is ? "magenta" : "cyan",
		cursor: "pointer",
	}
}

function ButtonSingle({children, index}) {
	const list_buttons = useContext(RadioContext);
	// over
	const [over_is, set_over_is] = useState(false);
	useEffect(() => {
    set_over_is(over_is)
  }, [over_is])
	const mouse_state = () => {
    over_is ? set_over_is(false) : set_over_is(true);
  }


	// toggle
	
	function manage_toggle(is) {
		set_toggle_is(is);
		list_buttons.map(elem => {
			elem.active_is = false;
			if(index === elem.index) {
				console.log("BINGO index", index, "elem.index",elem.index);
				elem.active_is = is;
				// console.log("change value",elem.id, elem.active_is, is);
			}
			// console.log("elem",elem.id, elem.active_is);
		})
	}

	const [toggle_is, set_toggle_is] = useState(false)
	useEffect(() => {
		set_toggle_is(toggle_is)
	}, [toggle_is])
	const toggle_state = () => {
		toggle_is ? set_toggle_is(false) : manage_toggle(true);
		// toggle_is ? set_toggle_is(false) : set_toggle_is(true);
	}
	
	return (
		<Fragment>
			<RadioContext.Consumer>
				{(elem) => {
					if( elem[index].active_is) {
						console.log("is active", index, elem[index].active_is);
					}
					return(
						// <button style={button_style(over_is, toggle_is)}
						<button style={button_style(over_is, elem[index].active_is)}
									onClick={toggle_state}
									onMouseEnter={mouse_state}
									onMouseLeave={mouse_state}
									>
							{index}
						</button>)
					}
				}
			</RadioContext.Consumer>
		</Fragment>
  );
}





export default function RadioButton() {
	const num_button = [1,2,3,4,5,6,7,8,9];

	const [radio_is, set_radio_is] = useState([])
  let id = 0
  useEffect(() => {
    num_button.forEach(elem => {
      // set_radio_is(prev_id => [...prev_id, [id++, elem]])
			set_radio_is(prev_id => [...prev_id, {id: id++, index :elem, active_is: false}])
    })
  }, [])

	return(
		<div>
			<Layout title="Graphic user interface : radio button"></Layout>
			<RadioContext.Provider value={radio_is}>
				<div style={{display: "flex"}}>
					{radio_is.map((elem, index) => (
						// <ButtonClassic index={index}>{elem}</ButtonClassic>
						<ButtonSingle index={index}>{elem}</ButtonSingle>
					))}
				</div>
			</RadioContext.Provider>
		</div>
	)
}


// MOVE WHEN THE WORK IS DONE
/////////////////////////////


function ButtonClassic({children, index}) {
	// over
	const [over_is, set_over_is] = useState(false);
	useEffect(() => {
    set_over_is(over_is)
  }, [over_is])
	const mouse_state = () => {
    over_is ? set_over_is(false) : set_over_is(true);
  }


	// toggle
	const [toggle_is, set_toggle_is] = useState(false)
	useEffect(() => {
		set_toggle_is(toggle_is)
	}, [toggle_is])
	const toggle_state = () => {
		toggle_is ? set_toggle_is(false) : set_toggle_is(true);
	}

	return (
		<Fragment>
			<button style={button_style(over_is, toggle_is)}
							onClick={toggle_state}
							onMouseEnter={mouse_state}
							onMouseLeave={mouse_state}
							>
				{index}
			</button>
		</Fragment>
  );
}