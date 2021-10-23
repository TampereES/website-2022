import React from "react"
import Container from "./Container.jsx"
import Link from "./Link.jsx"
import "./styles/footer.css"

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#083D77"
      }}
    >
      <Container
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div className="footer-column">
          <h3>Navigation</h3>
          <div className="footer-link-styles">
            <Link href="/" local>
              Home
            </Link>
            <Link href="/projects" local>
              Projects
            </Link>
            <Link href="/about" local>
              About us
            </Link>
            {/* <Link href="/news" local>
            News
          </Link> */}
          </div>
        </div>
        <div className="footer-column">
          <h3>Social media</h3>
          <div className="footer-link-styles">
            <Link href="https://www.instagram.com/tamperees/">Instagram</Link>
            <Link href="https://www.facebook.com/TampereES">Facebook</Link>
            <Link href="https://twitter.com/TampereES">Twitter</Link>
            <Link href="https://www.linkedin.com/company/tamperees">
              LinkedIn
            </Link>
          </div>
        </div>
        <div className="footer-column">
          <h3>Partners</h3>
          <div className="footer-link-styles">
            <Link href="https://tribetampere.com/">Tribe Tampere</Link>
            <Link href="https://hubs.fi">HUBS</Link>
            <Link href="https://businesstampere.com/">Business Tampere</Link>
            <Link href="https://tuni.fi">University of Tampere</Link>
          </div>
        </div>
        <div className="footer-column">
          <h3>Get involved</h3>
          <div className="footer-link-styles">
            <Link href="">Telegram</Link>
            <Link href="">Mail</Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
