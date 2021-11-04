import React from "react"
import Image from "next/image"

const Card = ({ imageUrl, name, description }) => {
  if (!imageUrl) return <p>img url empty</p>
  if (!name) return <p>card has no name</p>

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          margin: "1em",
          backgroundColor: "#05DBF2",
          borderRadius: "15px",
          width: "300px"
        }}
      >
        <Image
          style={{
            marginBottom: "0.25em",
            borderRadius: "15px 15px 0 0",
            marginBottom: "0.5em",
            gap: "1em"
          }}
          width="100%"
          height="350px"
          objectFit="cover"
          alt="profile picture"
          src={imageUrl}
        />
        <div style={{ textAlign: "center" }}>
          <h2 style={{ marginBottom: "0.5em" }}>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
