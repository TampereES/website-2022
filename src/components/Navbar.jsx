import React from "react"
import Link from "../components/Link"
import logo from "../images/Logo2-Dark.png"
import "./styles/navbar.css"

const Navbar = () => {
  const items = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" }
  ]

  return (
    <nav>
      <img className="nav-logo" src={logo} alt="logo" />
      <div className="nav-links">
        {items.map(item => (
          <div className="nav-link-div">
            <Link href={item.link} local>
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
