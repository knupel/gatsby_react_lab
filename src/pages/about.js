import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import styles from "../styles/about-css-modules.module.css"
import Container from "../components/container"

console.log(styles)
const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default function About() {
  return (
    <div style={{ color: `red` }}>
      <Layout title="ABOUT"></Layout>
      <Container>
        <User
          username="Stanislas Marçais"
          avatar="https://raw.githubusercontent.com/StanLepunK/gatsby_react_lab/main/media/profil/06_stauron.jpg"
          excerpt="Stanislas Marçais alias Knupel aka Stan le Punk"
        />
      </Container>
      <Header str="About Knupel artist" />

      <p>Knupel is Lepunk tootoo</p>
    </div>
  )
}
