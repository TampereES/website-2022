import React from "react"
import logo from "../images/Logo2-Dark.png"
import Link from "../components/Link"

const TestPage = () => {
  const style = {
    backgroundColor: "#083D77",
  }
  const gridStyle ={
    backgroundColor: "red",
    width: "500px",
    float: "right",
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    margin: "auto",
  }
  const buttonStyle = {
    items: "center",
    textAlign: "center",
  }

  const items = [
    {name: "About", link: "/about"},
    {name: "Projects", link: "/projects"},
    {name: "Contact", link: "/contact"},
  ]

  return (
    <div style={style}>
      <img src={logo} alt="logo" style={{height: "20%", padding: "5px"}}/>

      <div style={gridStyle}>
        {items.map((item, index) =>(
            <div style={{verticalAlign: "middle", textAlign: "center"}}>
            <Link href={item.link} local>{item.name}</Link></div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default TestPage
