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
import Head from "next/head"

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="author" content="TampereES" />
        <meta
          name="description"
          content="TampereES is a student-run entrepreneurship society that encourages inspired people to take action."
        />

        {/* Facebook open graph*/}
        <meta property="og:title" content="TampereES" />
        {/* <meta property="og:image" content={logo} /> */}

        {/* Twitter embeds */}
        <meta name="twitter:title" content="TampereES" />

        <link rel="shortcut icon" href="/favicon.png" />
      </Head>

      <div className="page-container">
        <Header />
        <main>{children} </main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
