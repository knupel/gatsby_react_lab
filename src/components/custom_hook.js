import { useState } from "react"

export const useForm = callback => {
  const [input, set_input] = useState({})

  const handle_submit = event => {
    if (event) {
      event.preventDefault()
    }
    callback()
  }

  const handle_input = event => {
    event.persist()
    set_input(input => ({ ...input, [event.target.name]: event.target.value }))
  }
  return {
    handle_submit,
    handle_input,
    input,
  }
}



export function useFocus() {
  
  const [focus, set_focus] = useState({});

  const focus_in = e => {
    const name = e.target.name;
    // e.persist();
    set_focus({[name]: true});
    // console.log("useFocus() in", focus);
  }

  const focus_out = e => {
    const name = e.target.name;
    set_focus({[name]: false});
    // console.log("useFocus() out", focus);
  }

  return {
    focus_in,
    focus_out,
    focus,
  }
}



export const useFormAdv = callback => {
  const [input, set_input] = useState({})
  // const [focus, set_focus] = useState();

  const handle_submit = e => {
    if (e) {
      e.preventDefault()
    }
    callback()
  }


  const handle_input = e => {
    e.persist()
    set_input(input => ({ ...input, [e.target.name]: e.target.value }))
  }

  // const handle_focus = e => {
  //   // e.persist();
  //   // console.log("0 handle_focus", focus);
  //   set_focus(true);
  //   // console.log("1 handle_focus", focus);
  //   // set_focus(focus => ({ ...focus, [e.target.name]: true }))
  // }

  // const handle_done = e => {
  //   // e.persist();
  //   // console.log("0 handle_done", focus);
  //   set_focus(false);
  //   // console.log("1 handle_done", focus);
  //   // set_focus(focus => ({ ...focus, [e.target.name]: false }))
  // }

  return {
    handle_submit,
    handle_input,
    input,
    // focus,
  }
}