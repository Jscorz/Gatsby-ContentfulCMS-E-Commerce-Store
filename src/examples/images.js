import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Images = () => {
  return (
    <Wrapper>
      <StaticImage src="../assets/images/about.jpeg" alt="example" />
      <h2>gatsby image</h2>
    </Wrapper>
  )
}

const Wrapper = styled.section``

export default Images
