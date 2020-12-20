import React from "react"
import Layout from "../../components/layout"

// function check_address_email(email) {
//   // let email = document.formulaire.EMAIL.value
//   let verif = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/
//   if (verif.exec(email) === null) {
//     alert("Votre email est incorrecte")
//     return false
//   } else {
//     alert("Votre email est correcte")
//     return true
//   }
// }

export default () => {
  return (
    <div>
      <Layout title="Send me an email, for that. You don't know but i use Netlify"></Layout>
      {/* <form method="post" action="#"> */}
      <form
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="contact"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <label>
          Name
          <input type="text" name="name" id="name" />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            id="email"
            pattern="^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,6}"
          />
        </label>
        <label>
          Subject
          <input type="text" name="subject" id="subject" />
        </label>
        <label>
          Message
          <textarea name="message" id="message" rows="5" />
        </label>
        <button type="submit">Send</button>
        <input type="reset" value="Clear" />
      </form>
    </div>
  )
}
