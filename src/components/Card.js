import React from "react"

const UserProfile = ({ imageUrl, name, description }) => {
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
        <img
          style={{
            marginBottom: "0.25em",
            borderRadius: "15px 15px 0 0",
            width: "100%",
            height: "350px",
            objectFit: "cover",
            marginBottom: "0.5em",
            gap: "1em"
          }}
          alt="profile picture"
          src={imageUrl}
        ></img>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ marginBottom: "0.5em" }}>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
