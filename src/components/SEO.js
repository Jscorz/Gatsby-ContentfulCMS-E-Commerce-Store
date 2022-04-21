import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        image
        url
      }
    }
  }
`

const SEO = ({ title, description, image, url }) => {
  const { site } = useStaticQuery(query)
  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${title} | ${site.siteMetadata.title}`}
      meta={[
        { name: `description`, content: metaDescription },
        { name: `image`, content: image },
      ]}
    ></Helmet>
  )
}

export default SEO
