import React from "react"
import Link from "../components/Link"

const Navbar = () => {
  const items = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" }
  ]

  return (
    <nav>
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
