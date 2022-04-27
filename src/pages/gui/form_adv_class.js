import React from "react";
// import {useState, useEffect } from "react";
import Layout from "../../components/layout"
import {container, title, card, form, 
        button_form, 
        text_input, text_area, 
        label_focus, input_focus} from "./gui.module.scss";


export default function PageForm() {
  return (
    <div>
      <Layout title="Form advanced class"></Layout>
      <FormAdvClass />
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
  return (
    <div className={text_input}>
    <label
      className={props.focus || props.value !== "" ? label_focus : ""}
      htmlFor={props.name}
    >
      {props.label}
    </label>
    <input
      className={props.focus || props.value !== "" ? input_focus : ""}
      type="text"
      name={props.name}
      value={props.value}
      onChange={props.get_change}
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
      className={props.focus || props.value !== "" ? label_focus : ""}
      htmlFor={props.name}
    >
      {props.label}
    </label>
    <textarea
			className={props.focus || props.value !== "" ? input_focus : ""}
      name={props.name}
      value={props.value}
      onChange={props.get_change}
      onInput={props.onInput}
      onFocus={props.focus_in}
      onBlur={props.focus_out}
    />
  </div>
);


function Button({children, data}) {
  console.log("send data value",data.value);
  return(
    <button className={button_form}>
    {children}
    </button>
  )
}
// const Button = (props) => <button className={button_form}>{props.children}</button>;

/** Root Component */
class FormAdvClass extends React.Component {
  constructor() {
    super();
    this.state = {
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
  }

  focus_in(e) {
    const name = e.target.name;
    const state = Object.assign({}, this.state[name]);
    state.focus = true;
    this.setState({ [name]: state }, () => {
      console.log(" handleFocus(e)", state);
    });
  }

  focus_out(e) {
    const name = e.target.name;
    const state = Object.assign({}, this.state[name]);
    state.focus = false;
    this.setState({ [name]: state }, () => {
      console.log("handle_done(e)",state);
    });
  }

  get_change(e) {
    const name = e.target.name;
    const state = Object.assign({}, this.state[name]);
    state.value = e.target.value;
    this.setState({ [name]: state }, () => {
      console.log(" get_change(e)",state);
    });
  }

  render() {
    const { name, email, message } = this.state;
    return (
      <div className={container}>
        <Card>
          <h1 className={title}>Send a Class Message!</h1>
          <Form>
            <TextInput
              {...name}
              focus_in={this.focus_in.bind(this)}
              focus_out={this.focus_out.bind(this)}
              get_change={this.get_change.bind(this)}
            />
            <TextInput
              {...email}
              focus_in={this.focus_in.bind(this)}
              focus_out={this.focus_out.bind(this)}
              get_change={this.get_change.bind(this)}
            />
            <TextArea
              {...message}
              focus_in={this.focus_in.bind(this)}
              focus_out={this.focus_out.bind(this)}
              get_change={this.get_change.bind(this)}
            />
            <Button data={this.state}>Send</Button>
          </Form>
        </Card>
      </div>
    );
  }
}