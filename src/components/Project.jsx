import React from "react"

function Project(props) {
  return (
    <a
      href={props.link}
      rel="noreferrer"
      target="_blank"
      className="bg-white rounded-lg shadow px-15 p-10"
    >
      <h3 className="h3 mb-10">{props.title}</h3>
      <p className="lead text-9xl">{props.description}</p>
    </a>
  )
}

export default Project
