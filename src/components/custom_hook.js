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
    set_focus({id: [name], is: true, [name]: true});
  }

  const focus_out = e => {
    const name = e.target.name;
    set_focus({id: [name], is: true, [name]: false});
  }

  return {
    focus_in,
    focus_out,
    focus,
  }
}



export const useFormAdv = callback => {
  const [input, set_input] = useState({})

  const handle_submit = e => {
    if (e) {
      e.preventDefault()
    }
    callback()
  }

  const get_change = e => {
    e.persist();
    const name = e.target.name;
    const value = e.target.value;
    set_input(input => ({ ...input, [name]: value }))
  }

  return {
    handle_submit,
    get_change,
    input,
    // focus,
  }
}