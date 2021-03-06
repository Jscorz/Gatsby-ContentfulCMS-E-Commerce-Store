import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import OptionsList from "../components/OptionsList"
import SEO from "../components/SEO"

const TagTemplate = ({ data, pageContext }) => {
  const options = data.allContentfulRecipe.nodes
  console.log(options)
  return (
    <Layout>
      <SEO title={pageContext.tag} />
      <main className="page">
        <h2>{pageContext.title}</h2>
        <div className="tag-recipes">
          <OptionsList options={options} />
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query GetRecipeByTag($tag: String) {
    allContentfulRecipe(
      filter: { content: { tags: { eq: $tag } } }
      sort: { fields: title, order: ASC }
    ) {
      nodes {
        title
        id
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default TagTemplate
