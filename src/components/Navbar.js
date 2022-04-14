import React, { useState } from "react"
import { Link } from "gatsby"
import { FiAlignJustify } from "react-icons/fi"
import logo from "../assets/images/logo_transparent.png"
const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="modern styles" />
          </Link>
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <FiAlignJustify />
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(!show)}
          >
            home
          </Link>
          <Link
            to="/shop"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(!show)}
          >
            shop
          </Link>
          <Link
            to="/tags"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(!show)}
          >
            tags
          </Link>

          <div className="nav-link contact-link" onClick={() => setShow(!show)}>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
