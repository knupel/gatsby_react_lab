/**
 * Button radio
 * v 0.0.3
 * 2022-2023
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
import Layout from "../../../components/struct/layout"
import './radio_button.css'

export const RadioContext = createContext();
RadioContext.displayName = "context_button_radio";






// https://javascript.plainenglish.io/how-to-style-input-field-in-react-8d435da5cfce
// https://www.sliderrevolution.com/resources/styling-radio-buttons/
// https://juliencrego.com/astuces/personnaliser-les-boutons-radio-et-checkbox-avec-css/
// https://dev.to/diran_adeola/how-to-create-a-floating-label-input-with-css-in-js-and-react-19gd
// https://www.codevertiser.com/how-to-create-custom-radio-button-in-reactjs/

// const button_single_style = (over_is, toggle_is) => {
// 	return {
// 		// display: "none",
// 		width: 40,
// 		height: 20,
// 		backgroundColor: over_is ? "yellow" : toggle_is ? "magenta" : "cyan",
// 		cursor: "pointer",
// 	}
// }


// create a custome hook
function useRadioContext() {
  const context = useContext(RadioContext);
  if (!context) {
    throw new Error(
      `Radio compound components cannot be rendered outside the Radio component`
    );
  }
  return context;
}




function RadioGroup({ children, defaultValue, onChange }) {
	// toggle
  const [toggle_is, set_toggle_is] = useState("");
	useEffect(() => {
    set_toggle_is(defaultValue);
  }, [defaultValue]);
  function toggle_state(value) {
    set_toggle_is(value);
    onChange(value);
  }


  return (
    <RadioContext.Provider value={[toggle_is, toggle_state]}>
      <div role="radiogroup">{children}</div>
    </RadioContext.Provider>
  );
}



function RadioSingle({ value, children }) {
  const [toggle_is, onChange] = useRadioContext();
  const checked = value === toggle_is;

	// console.log("value",value);
	// console.log("toggle", toggle_is);

  return (
		<div>
			<label>
			{/* <label className="radio-label"> */}
			{/* <label htmlFor="radio_button" className="radio-label"> */}
			
				<input
					className="radio-input"
					id="radio_button"
					value={value}
					checked={checked}
					type="radio"
					onChange={({ target }) => {
						// some code if necessary
						console.log("target.value",target.value, checked);
						onChange(target.value)}}
				/>
				<div className="custom-radio" >{toggle_is}
				</div>
			</label>
		</div>
  );
}

// I don't understand this syntax
RadioGroup.RadioSingle = RadioSingle;


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
			<RadioGroup
        defaultValue="3"
        onChange={value => console.log("onChange: value: ", value)}
      >
				<div style={{display: "flex"}}>
							{radio_is.map((elem, index) => (
								// <RadioGroup.RadioSingle value={elem} >{index}</RadioGroup.RadioSingle>
								<RadioGroup.RadioSingle value={index.toString()} >{index}</RadioGroup.RadioSingle>
							))}
				</div>
      </RadioGroup> 
			

			<div style={{height: "10px"}}></div>
			<div style={{display: "flex"}}>
					{radio_is.map((elem, index) => (
						<RadioClassic index={index}>{elem}</RadioClassic>
					))}
			</div>
		</div>
	)
}

// function RadioSingle({ value, children }) {
//   const [toggle_is, onChange] = useRadioContext();
//   const checked = value === toggle_is;
// 	const over_is = true;
//   return (
// 		<div>
// 			<label htmlFor="radio_button" className="radio-label">
// 			{/* <span className="custom-radio" > */}
// 				<input
// 					className="radio-input"
// 					id="radio_button"
// 					value={value}
// 					checked={checked}
// 					type="radio"
// 					onChange={({ target }) => {
// 						// some code if necessary
// 						console.log(target.value, checked);
// 						onChange(target.value)}}
// 				/>
// 				<span className="custom-radio" >
// 				{"truc"}
// 				</span>
// 			</label>
// 		</div>
//   );
// }

// function RadioSingle({ value, children }) {
//   const [toggle_is, onChange] = useRadioContext();
//   const checked = value === toggle_is;
// 	const over_is = true;
//   return (
// 		<div>
// 			<label htmlFor="radio_button" style={button_single_style(over_is, toggle_is)}>
//       <input
// 				id="radio_button"
//         value={value}
//         checked={checked}
//         type="radio"
//         onChange={({ target }) => {
// 					// some code if necessary
// 					console.log(target.value, checked);
// 					onChange(target.value)}}
//       />
// 			</label>
// 		</div>
//   );
// }












// MOVE WHEN THE WORK IS DONE
/////////////////////////////


const button_style = (over_is, toggle_is) => {
	return {
		width: 20,
		height: 20,
		backgroundColor: over_is ? "yellow" : toggle_is ? "magenta" : "cyan",
		cursor: "pointer",
	}
}

function RadioClassic({children, index}) {
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