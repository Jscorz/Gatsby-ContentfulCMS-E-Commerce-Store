import React from "react"
import Layout from "../components/Layout"
import { page, text } from "../examples/about.module.css"
import styled from "styled-components"

const about = () => {
  return (
    <Layout>
      <Wrapper>
        <div>
          <h1>about page</h1>
          <h1>hello world</h1>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ad ex,
            numquam necessitatibus voluptates repellat iure dolores dolorem unde
            recusandae praesentium qui molestiae, quaerat quasi? Ratione,
            aliquam tenetur? Voluptas libero porro voluptatum veniam, aliquam
            tempora assumenda facilis minus blanditiis amet!
          </p>
        </div>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  color: blue;

  h1 {
    color: yellowgreen;
  }

  .text {
    text-transform: uppercase;
  }
`

export default about
