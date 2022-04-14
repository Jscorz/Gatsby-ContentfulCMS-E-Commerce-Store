import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"

const OptionsList = ({ options = [] }) => {
  return (
    <div className="recipes-list">
      {options.map(option => {
        const { id, title, image, prepTime, cookTime } = option
        const pathToImage = getImage(image)
        const slug = slugify(title, { lower: true })
        return (
          <Link key={id} to={`/${slug}`} className="recipe">
            <GatsbyImage
              image={pathToImage}
              className="recipe-img"
              alt={title}
            />
            <h5>{title}</h5>
            <p>| ${cookTime}</p>
            <p>| {prepTime} quantity available</p>
          </Link>
        )
      })}
    </div>
  )
}

export default OptionsList
