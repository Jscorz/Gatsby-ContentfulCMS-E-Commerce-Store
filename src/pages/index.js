import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { page, text } from "../examples//home.module.css"

export default function Home() {
  return (
    <Layout>
      <div className={page}>
        <h1>home page</h1>
        <h1>hello world</h1>
        <h1>hello people</h1>
        <p className={text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          debitis libero atque maxime quae laborum facilis qui voluptatum itaque
          nemo eveniet quas, animi tempora, tenetur minus unde corporis optio
          repudiandae! Ea vel, pariatur nesciunt nulla culpa ipsam obcaecati
          voluptate explicabo!
        </p>
      </div>
    </Layout>
  )
}
