import React, { useEffect } from "react";
import {useState} from "react";
import { useFormAdv, useFocus } from "../../components/custom_hook"
import Layout from "../../components/layout"
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
      onChange={props.onChange}

      onInput={props.onInput}

      onFocus={props.focus_in}
      onBlur={props.focus_out}
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
      onChange={props.onChange}
      
      onInput={props.onInput}

      onFocus={props.focus_in}
      onBlur={props.focus_out}
    />
  </div>
);

const Button = (props) => <button className={button_form}>{props.children}</button>;

const setting = {
  name: {
    name: "name",
    label: "Name",
    value: "",
    focus: false
  },
  email: {
    name: "email",
    label: "Email",
    value: "",
    focus: false
  },
  message: {
    name: "message",
    label: "Message",
    value: "",
    focus: false
  }
};

/** Root Component */
function FormAdvHook() {

  const [data, set_data] = useState(setting);

  function update_data(focus, input) {
    const list = Object.keys(data);
    for(const key of list ) {
      if(key === focus.id[0]) {
        console.log("data[key]",data[key]);
        const elem = Object.assign({}, data[key]);
        console.log("0 elem",elem);
        elem.focus = focus.is;
        console.log("1 elem",elem);
        set_data({[key] : elem});
      }
    }
  }


  const callback_func = () => {
    console.log(`Et voilà les nouvelles valeurs: ${input.name} ${input.email} ${input.message} ${focus}`);
    update_data();
  }


	const { handle_submit, handle_input, input} = useFormAdv(callback_func);
  const { focus_in, focus_out, focus } = useFocus();

  useEffect(() => {
    if(focus.name || focus.email || focus.message) {
      update_data(focus, input);
    };
  },[focus]);
  
	const { name, email, message } = data;


	return (
		<div className={container}>
			<Card>
				<h1 className={title}>Send a HOOK Message!</h1>
				<Form>
					<TextInput
						{...name}
						focus_in={focus_in}
						focus_out={focus_out}
						onChange={handle_input}
					/>
					<TextInput
						{...email}
						focus_in={focus_in}
						focus_out={focus_out}
						onChange={handle_input}
					/>
					<TextArea
						{...message}
						focus_in={focus_in}
						focus_out={focus_out}
						onChange={handle_input}
					/>
					<Button>Send</Button>
				</Form>
			</Card>
		</div>
	);

}