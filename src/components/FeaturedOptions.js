import React from "react"
import TagsList from "./TagsList"
import OptionsList from "./OptionsList"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
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

const FeaturedOptions = () => {
  const data = useStaticQuery(query)
  const options = data.allContentfulRecipe.nodes

  return (
    <section className="recipes-container">
      <TagsList options={options} />
      <OptionsList options={options} />
    </section>
  )
}

export default FeaturedOptions

function getCount(str) {
  let vowelsCount = 0
  let stringArray = str.split("")

  newArray = stringArray.filter(word => "aeiou".includes(word)).length
  vowelsCount = newArray

  return vowelsCount
}
function getCount(str) {
  let vowelsCount = 0
  let stringArray = str.split("")

  newArray = stringArray.filter(word => "aeiou".includes(word)).length
  vowelsCount = newArray

  return vowelsCount
}
