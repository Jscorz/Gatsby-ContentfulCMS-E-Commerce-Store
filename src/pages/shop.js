import React from "react"
import Layout from "../components/Layout"
import AllOptions from "../components/AllOptions"
import SEO from "../components/SEO"

const Options = () => {
  return (
    <Layout>
      <SEO title="Shop" />
      <main className="page">
        <AllOptions />
      </main>
    </Layout>
  )
}

export default Options
