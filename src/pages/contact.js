import React from "react"
import Layout from "../components/Layout"
import { Link, graphql } from "gatsby"
import SEO from "../components/SEO"

const contact = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <SEO title="Contact" />
      <main className="page">
        <section className="contact-page">
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/xlezprqa"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn-block">
                submit
              </button>
            </form>
          </article>
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              Twee blue bottle beard lo-fi. Art party flexitarian vexillologist
              wolf. Flannel knausgaard PBR&B, small batch slow-carb chicharrones
              ethical jianbing.
            </p>
            <p>
              Photo booth forage williamsburg, polaroid pitchfork cliche small
              batch.
            </p>
            <p>
              Venmo chartreuse cloud bread hot chicken, squid kombucha fashion
              axe sriracha. Raw denim hexagon tbh, chambray gastropub bicycle
              rights vegan retro etsy narwhal disrupt asymmetrical schlitz.
            </p>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
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
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default contact
