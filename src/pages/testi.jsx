import React from "react"


const TestPage = () => {
  const style = {
    backgroundColor: "#083D77",
    height: "50px",
  }
  const gridStyle ={
    backgroundColor: "red",
    width: "500px",
    float: "right",
    display: "flex",
    flexDirection: "row-reverse",
    gap: "20px",
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
      <div style={gridStyle}>
        {items.map((item, index) =>(
          <div style={buttonStyle} key={index}>
            <p className={[{verticalAlign: "middle"}, {textAlign: "center"}]}>{item.name}</p>
          </div>
        ))}
      </div>
    </div>

  )
}

export default TestPage
