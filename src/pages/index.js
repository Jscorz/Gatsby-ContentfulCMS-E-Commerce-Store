import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import AllOptions from "../components/AllOptions"
import SEO from "../components/SEO"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" description="this is the home page" />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="clothes shopping online"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>modern styles</h1>
              <h4>great picks at wholesale prices</h4>
            </div>
          </div>
        </header>
        <AllOptions />
      </main>
    </Layout>
  )
}
