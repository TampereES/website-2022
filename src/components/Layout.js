/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import Footer from "@/components/Footer"
import Header from "./Header"
import Container from "./Container"

const Layout = ({ children }) => {
  return (
    <div className="page-container">
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
