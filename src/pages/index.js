import React from "react"
import { Link } from "gatsby"
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>hello people</h1>
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
    </div>
  )
}
