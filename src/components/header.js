import * as React from "react"
import PropTypes from "prop-types"
import Navbar from "./Navbar"
import Container from "./Container"

const Header = () => {
  return (
    <Container>
      <Navbar />
    </Container>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
