import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
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
          <article>
            <form className="form contact-form">
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
        </section>
      </main>
    </Layout>
  )
}

export default contact
