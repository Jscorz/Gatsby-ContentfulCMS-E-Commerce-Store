import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()}
        <span> Modern Styles</span>. All rights reserved
      </p>
    </footer>
  )
}

const Wrapper = styled.section`
  span {
    color: var(--primary-100);
  }
`

export default Footer
