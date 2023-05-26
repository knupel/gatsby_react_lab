// https://medium.com/@geeky_writer_/using-react-hooks-to-create-awesome-forms-6f846a4ce57

import React from "react"
import Layout from "../../../components/struct/layout"
import { useForm } from "../../../components/custom_hook"

export default function PageFormSignup() {
  return (
    <div>
      <Layout title="Form signup hook"></Layout>
      <FormHook />
    </div>
  )
}

function FormHook() {
  const signup = () => {
    alert(`User Created!
         Name: ${input.firstName} ${input.lastName}
         Email: ${input.email}`)
  }

  const { handle_submit, handle_input, input } = useForm(signup)

  return (
    <form onSubmit={handle_submit}>
      <div>
        <label>
          First Name
          <input
            type="text"
            name="firstName"
            onChange={handle_input}
            value={input.firstName}
            required
          />
        </label>

        <label>
          Last Name
          <input
            type="text"
            name="lastName"
            onChange={handle_input}
            value={input.lastName}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Email Address
          <input
            type="email"
            name="email"
            onChange={handle_input}
            value={input.email}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Password
          <input
            type="password"
            name="password1"
            onChange={handle_input}
            value={input.password1}
          />
        </label>
      </div>
      <div>
        <label>
          Re-enter Password{" "}
          <input
            type="password"
            name="password2"
            onChange={handle_input}
            value={input.password2}
          />
        </label>
      </div>
      <button type="submit">Sign Up</button>
    </form>
  )
}
