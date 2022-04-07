import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import RecipeList from "../components/RecipeList"

const TagTemplate = ({ data, pageContext }) => {
  const recipes = data.allContentfulRecipe.nodes
  console.log(recipes)
  return (
    <Layout>
      <main className="page">
        <h2>{pageContext.title}</h2>
        <div className="tag-recipes">
          <RecipeList recipes={recipes} />
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
