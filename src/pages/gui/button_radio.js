/**
 * Button radio
 * v 0.0.2
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

function ButtonSingle({value, index}) {
	// over
	const [over_is, set_over_is] = useState(false);
	useEffect(() => {
    set_over_is(over_is)
  }, [over_is])
	const mouse_state = () => {
    over_is ? set_over_is(false) : set_over_is(true);
  }


	// toggle
	// const [list_is, set_list_is] = useState(false)
	// useEffect(() => {

	// }, [value])
	function manage_toggle(index) {
		// set_toggle_is(is);
		value.map(elem => {
			if(index === elem.index) {
				elem.active_is ? elem.active_is = false: elem.active_is = true;
			} else {
				elem.active_is = false;
			}
		})
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
			<button style={button_style(over_is, value[index].active_is)}
						onClick={manage_toggle(index)}
						onMouseEnter={mouse_state}
						onMouseLeave={mouse_state}
						>
				{index}
			</button>
		</Fragment>
  );
}







export default function RadioButton() {
	const num_button = [1,2,3,4,5,6,7,8,9];

	const [radio_is, set_radio_is] = useState([])
  let id = 0
  useEffect(() => {
    num_button.forEach(elem => {
			set_radio_is(prev_id => [...prev_id, {id: id++, index :elem -1, active_is: false}])
    })
  }, [])

	return(
		<div>
			<Layout title="Graphic user interface : radio button"></Layout>
			<RadioContext.Provider value={radio_is}>
				<RadioContext.Consumer>
					{(value) => {
						return (<div style={{display: "flex"}}>
							{value.map((elem, index) => (
								<ButtonSingle value={value} index={index}></ButtonSingle>
							))}
					</div>)
					}}
				</RadioContext.Consumer>
			</RadioContext.Provider>
			<div style={{height: "10px"}}></div>
			<div style={{display: "flex"}}>
					{radio_is.map((elem, index) => (
						<ButtonClassic index={index}>{elem}</ButtonClassic>
					))}
			</div>
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