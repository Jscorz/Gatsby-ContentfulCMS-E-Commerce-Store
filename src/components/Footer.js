import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <Wrapper>
      <footer className="page-footer">
        <p>
          &copy; {new Date().getFullYear()}
          <span> Modern Styles</span>. All rights reserved
        </p>
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  p {
    letter-spacing: 0.5rem;
  }

  span {
    color: var(--primary-100);
  }
`

export default Footer
