import PropTypes from "prop-types"
import * as React from "react"
import logo from "../images/Logo2-Dark.png"
import Container from "./Container"
import Navbar from "./Navbar"
import Image from "next/image"
import Link from "@/components/Link"

const Header = () => {
  return (
    <header>
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <Link href="/" local>
          <Image
            src={logo}
            objectFit="contain"
            height="60px"
            width="200px"
            alt="logo"
            priority
          />
        </Link>
        <Navbar />
      </Container>
    </header>
  )
}

export default Header
