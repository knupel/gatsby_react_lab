// https://medium.com/@geeky_writer_/using-react-hooks-to-create-awesome-forms-6f846a4ce57

import React, { useState } from "react"
import Layout from "../../components/layout"
import { useForm } from "../../components/custom_hook"

export default function PageForm() {
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
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          onChange={handle_input}
          value={input.firstName}
          required
        />
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          onChange={handle_input}
          value={input.lastName}
          required
        />
      </div>
      <div>
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          onChange={handle_input}
          value={input.email}
          required
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password1"
          onChange={handle_input}
          value={input.password1}
        />
      </div>
      <div>
        <label>Re-enter Password</label>
        <input
          type="password"
          name="password2"
          onChange={handle_input}
          value={input.password2}
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  )
}
