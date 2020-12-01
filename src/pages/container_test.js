import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import styles from "../styles/about.module.css"
import Container, { Test } from "../components/container"

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
      <Layout title="TEST CONTAINER STYLE"></Layout>
      <Container>
        <User
          username="Stanislas Marçais"
          avatar="https://raw.githubusercontent.com/StanLepunK/gatsby_react_lab/main/media/profil/06_stauron_detail.jpg"
          excerpt="Stanislas Marçais alias Knupel aka Stan le Punk"
        />
      </Container>
      <Test>
        <User
          username="Stanislas Marçais"
          avatar="https://raw.githubusercontent.com/StanLepunK/gatsby_react_lab/main/media/profil/06_stauron_detail.jpg"
          excerpt="Stanislas Marçais alias Knupel aka Stan le Punk"
        />
      </Test>
      <Header str="About Knupel artist" />

      <p>Knupel is Lepunk tootoo</p>
    </div>
  )
}
