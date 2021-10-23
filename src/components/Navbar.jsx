import React from "react"
import Link from "../components/Link"
import logo from "../images/Logo2-Dark.png"

const Navbar = () => {
  const gridStyle = {
    backgroundColor: "red",
    width: "500px",
    float: "right",
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    margin: "auto"
  }
  const buttonStyle = {
    items: "center",
    textAlign: "center"
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
          <div style={{ verticalAlign: "middle", textAlign: "center" }}>
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
