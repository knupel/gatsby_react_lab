import React from "react"
import Layout from "../../components/layout"
import { useForm } from "../../components/custom_hook"

export default function PageForm() {
  return (
    <div>
      <Layout title="Form basic hook"></Layout>
      <FormHook />
    </div>
  )
}

function FormHook() {
  const info = () => {
    alert(`User Created! Name: ${input.firstName} ${input.lastName}`)
  }

  const { handle_submit, handle_input, input } = useForm(info)

  return (
    <form onSubmit={handle_submit}>
      <label>
        First name
        <input
          type="text"
          name="firstName"
          value={input.firstName}
          onChange={handle_input}
        />
      </label>
      <label>
        Last name
        <input
          type="text"
          name="lastName"
          value={input.lastName}
          onChange={handle_input}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}
