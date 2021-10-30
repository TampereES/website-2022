import PropTypes from "prop-types"
import * as React from "react"
import logo from "../images/Logo2-Dark.png"
import Container from "./Container"
import Navbar from "./Navbar"
import Image from "next/image"

const Header = () => {
  return (
    <header>
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <Image
          src={logo}
          objectFit="contain"
          height="60px"
          width="200px"
          alt="logo"
          priority
        />
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
