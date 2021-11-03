import React from 'react'


const UserProfile = (props) => {
    return <div style={{ maxWidth: "500px" }}>
        <div>
            <img class="profile-image" alt="Profile picture" src={props.profileImgUrl} />
        </div>

        <h2 style={{ textAlign: "center" }} class="name">{props.fullName}</h2>
        <p style={{ textAlign: "center" }} class="desc">{props.desc}</p>
    </div>

}


export default UserProfile;