import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const RecipeList = ({ recipes = [] }) => {
  return (
    <div className="recipes-list">
      {recipes.map(recipe => {
        return <p>{recipe.title}</p>
      })}
      <h4>recipe list</h4>
    </div>
  )
}

export default RecipeList
