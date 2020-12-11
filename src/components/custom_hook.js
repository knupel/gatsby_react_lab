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
