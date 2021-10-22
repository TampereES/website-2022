import React from "react"
import logo from "../images/Logo2-Dark.png"

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
    {name: "Eka"},
    {name: "Toka"},
    {name: "Kolmas"},
    {name: "Viides"},
  ]

  return (
    <div style={style}>
      <img src={logo} alt="logo" style={{height: "70%", padding: "5px"}}/>

      <div style={gridStyle}>
        {items.map((item, index) =>(
          <div style={buttonStyle} key={index}>
            <p style={{verticalAlign: "middle", textAlign: "center"}}>{item.name}</p>
          </div>
        ))}
      </div>
    </div>

  )
}

export default TestPage
