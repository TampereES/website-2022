import React from 'react'


const UserProfile = (props) => {
    return <div>
        <div>
            <img class="profile-image" src={props.profileImgUrl}></img>
        </div>

        <h2 class="name">{props.fullName}</h2>
        <p class="desc">{props.desc}</p>
    </div>

}