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
          avatar="https://raw.githubusercontent.com/StanLepunK/git_media_src/main/profil/knupel_2020_11_13_200x200px.jpg?token=AAZNRLICDB5JNOGGFSNXLWK7W7W5O"
          excerpt="Stanislas Marçais alias Knupel aka Stan le Punk"
        />
      </Container>
      <Header str="About Knupel artist" />

      <p>Knupel is Lepunk tootoo</p>

      <img
        src="https://raw.githubusercontent.com/StanLepunK/git_media_src/main/profil/knupel_2020_11.jpg?token=AAZNRLLSYTF3U5KV7A3K5OS7W6HAU"
        alt=""
      />
    </div>
  )
}
