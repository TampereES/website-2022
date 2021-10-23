import React from "react"
import "../styles/container.css"

function Container(props) {
  return (
    <div className="container" style={props.style}>
      {props.children}
    </div>
  )
}

export default Container
