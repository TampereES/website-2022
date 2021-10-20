import React from "react"

const UserProfile = ({ imageUrl, name, description }) => {
  if (!imageUrl) return <p>img url empty</p>
  if (!name) return <p>card has no name</p>

  return (
    <div
      style={{
        maxWidth: "350px",
        backgroundColor: "gray",
        borderRadius: "15px"
      }}
    >
      <div>
        <img
          style={{
            marginBottom: "0.25em",
            borderRadius: "15px",
            width: "100%",
            height: "350px",
            objectFit: "cover"
          }}
          class="m-5 profile-image"
          alt="profile picture"
          src={imageUrl}
        ></img>
      </div>
      <div style={{ textAlign: "center" }}>
        <h2 class="name" style={{ margin: "0.5em 0" }}>
          {name}
        </h2>
        <p class="desc">{description}</p>
      </div>
    </div>
  )
}

export default UserProfile
