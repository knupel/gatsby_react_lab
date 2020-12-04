import React, { useState } from "react"
import Layout from "../../components/layout"

// https://medium.com/@geeky_writer_/using-react-hooks-to-create-awesome-forms-6f846a4ce57
export default function PageForm() {
  return (
    <div>
      <Layout title="Form basic hook"></Layout>
      <FormHook />
    </div>
  )
}

function FormHook() {
  const [first_name, set_first_name] = useState("")
  const [last_name, set_last_name] = useState("")

  const change_last_name = value => {
    set_last_name(value)
  }

  const change_first_name = value => {
    set_first_name(value)
  }

  const handleSubmit = () => {
    // event.preventDefault()
    alert(`Welcome ${first_name} ${last_name}!`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First name
        <input
          type="text"
          name="firstName"
          value={first_name}
          onChange={change_first_name}
        />
      </label>
      <label>
        Last name
        <input
          type="text"
          name="lastName"
          value={last_name}
          onChange={change_last_name}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}
