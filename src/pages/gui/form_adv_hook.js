/**
* Advanced Hook Form
* based on 
* Based on Advanced class Form
*
* v 0.0.1
* 2022-2022
* */

import React, { useEffect } from "react";
import {useState} from "react";
import { useFormAdv, useFocus } from "../../components/custom_hook"
import Layout from "../../components/struct/layout"
import {container, title, card, form, 
        button_form, 
        text_input, text_area, 
        label_focus, input_focus} from "./gui.module.scss";


export default function PageForm() {
  return (
    <div>
      <Layout title="Form advanced hook"></Layout>
      <FormAdvHook />
    </div>
  )
}


// Based on code https://codepen.io/cojdev/pen/LMZVqj 
// Charles Ojukwu: https://codepen.io/cojdev

/** Components */
const Card = (props) => (
  <div className={card}>
    {props.children}
  </div>
);

function Form(props) {
  return (
    <form className={form}>{props.children}</form>
  )
};

function TextInput(props) {
  console.log("TextInput props.name", props.name);
  console.log("TextInput props.focus", props.focus);
  console.log("TextInput props.value", props.value);
  
  return (
    <div className={text_input}>
    <label
      className={props.focus === true || props.value !== "" ? label_focus : ""}
      htmlFor={props.name}
    >
      {props.label}
    </label>
    <input
      className={props.focus === true || props.value !== "" ? input_focus : ""}
      type="text"
      name={props.name}
      value={props.value}

      onChange={props.get_change}
      onFocus={props.focus_in}
      onBlur={props.focus_out}

      onInput={props.onInput}
    />
  </div>
  )
};

const TextArea = (props) => (
  <div className={text_area}>
    <label
      className={props.focus === true || props.value !== "" ? label_focus : ""}
      htmlFor={props.name}
    >
      {props.label}
    </label>
    <textarea
			className={props.focus === true || props.value !== "" ? input_focus : ""}
      name={props.name}
      value={props.value}

      onChange={props.get_change}
      onFocus={props.focus_in}
      onBlur={props.focus_out}
      
      onInput={props.onInput}
    />
  </div>
);

const Button = (props) => <button className={button_form}>{props.children}</button>;
const setting = [
  {
    name: "name",
    label: "Name",
    value: "",
    focus: false
  },
  {
    name: "email",
    label: "Email",
    value: "",
    focus: false
  },
  {
    name: "message",
    label: "Message",
    value: "",
    focus: false
  }
];


function FormAdvHook() {
  const [data, set_data] = useState(setting);
  function update_data(focus, input) {
    const buf = [];
    data.map(elem => {
      if(elem.name === focus.id[0]) {
        elem.focus = focus.is;
        buf.push(elem);
      } else {
        elem.focus = false;
        buf.push(elem);
      }
    })
    if(buf !== undefined) {
      set_data(buf);
    }
  }


  const callback_func = () => {
    console.log(`Et voilà les nouvelles valeurs: ${input.name} ${input.email} ${input.message} ${focus}`);
    update_data();
  }


	const { handle_submit, get_change, input} = useFormAdv(callback_func);
  const { focus_in, focus_out, focus } = useFocus();

  useEffect(() => {
    if(focus.id !== undefined) {
      update_data(focus, input);
    };
  },[focus]);
  
  // not really good system :(
  const name = data[0];
  const email = data[1];
  const message = data[2];

	return (
		<div className={container}>
			<Card>
				<h1 className={title}>Send a HOOK Message!</h1>
				<Form>
					<TextInput
						{...name}
						focus_in={focus_in}
						focus_out={focus_out}
						onChange={get_change}
					/>
					<TextInput
						{...email}
						focus_in={focus_in}
						focus_out={focus_out}
						onChange={get_change}
					/>
					<TextArea
						{...message}
						focus_in={focus_in}
						focus_out={focus_out}
						onChange={get_change}
					/>
					<Button>Send</Button>
				</Form>
			</Card>
		</div>
	);
}