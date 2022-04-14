import React from "react"
import TagsList from "./TagsList"
import OptionsList from "./OptionsList"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllOptions = () => {
  const data = useStaticQuery(query)
  const options = data.allContentfulRecipe.nodes

  return (
    <section className="recipes-container">
      <TagsList options={options} />
      <OptionsList options={options} />
    </section>
  )
}

export default AllOptions
