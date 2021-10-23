import * as React from "react"
import PropTypes from "prop-types"
import Navbar from "./Navbar"
import Container from "./Container"

import logo from "../images/Logo2-Dark.png"

const Header = () => {
  return (
    <header>
      <Container>
        <img className="nav-logo" src={logo} alt="logo" />
        <Navbar />
      </Container>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
