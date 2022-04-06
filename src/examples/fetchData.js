import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      siteMetadata {
        author
        description
        simpleData
        title
        complexData {
          age
          name
        }
        person {
          age
          name
        }
      }
    }
  }
`

const fetchData = () => {
  return (
    <div>
      <h1>hello from fetch data</h1>
    </div>
  )
}

export default fetchData
