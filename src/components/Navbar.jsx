import React from "react"
import Link from "../components/Link"
import logo from "../images/Logo2-Dark.png"

const Navbar = () => {
  const gridStyle = {
    float: "right",
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    margin: "auto"
  }

  const items = [
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" }
  ]

  return (
    <div>
      <img src={logo} alt="logo" style={{ height: "100px", padding: "5px" }} />

      <div style={gridStyle}>
        {items.map((item, index) => (
          <div className="nav-link">
            <Link href={item.link} local>
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Navbar
