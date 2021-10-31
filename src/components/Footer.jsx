import React from "react"
import Container from "./Container.jsx"
import Link from "@/components/Link.jsx"

const Footer = () => {
  const structure = [
    {
      name: "Navigation",
      contents: [
        { name: "Home", link: "/", localLink: true },
        { name: "Projects", link: "/projects", localLink: true },
        { name: "About us", link: "/about", localLink: true },
        { name: "Events", link: "/events", localLink: true }
      ]
    },
    {
      name: "Social media",
      contents: [
        { name: "Instagram", link: "https://www.instagram.com/tamperees/" },
        { name: "Facebook", link: "https://www.facebook.com/TampereES" },
        { name: "Twitter", link: "https://twitter.com/TampereES" },
        { name: "LinkedIn", link: "https://www.linkedin.com/company/tamperees" }
      ]
    },
    {
      name: "Partners",
      contents: [
        { name: "Tribe Tampere", link: "https://tribetampere.com/" },
        { name: "HUBS", link: "https://hubs.fi" },
        { name: "Business Tampere", link: "https://businesstampere.com/" },
        { name: "University of Tampere", link: "https://tuni.fi" }
      ]
    },
    {
      name: "Get involved",
      contents: [
        { name: "Telegram", link: "" },
        { name: "Mail", link: "" }
      ]
    }
  ]

  return (
    <footer>
      <Container
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        {structure.map(group => {
          return (
            <div className="footer-column" key={group.name}>
              <h3>{group.name}</h3>
              <div className="footer-link-styles">
                {group.contents.map(link => (
                  <Link href={link.link} local={link.localLink} key={link.link}>
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          )
        })}
      </Container>
    </footer>
  )
}

export default Footer
