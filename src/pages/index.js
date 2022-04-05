import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <h1 style={{ color: "red", textTransform: "capitalize" }}>home page</h1>
      <div>
        <Link to="/about">about</Link>
      </div>
      <div>
        <Link to="/company/history">history</Link>
      </div>
      <a href="/about">regular link</a>
      <a href="https://www.gatsbyjs.com/docs/how-to/" target="_blank">
        gatsby docs
      </a>
    </Layout>
  )
}
