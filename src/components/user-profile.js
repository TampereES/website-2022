import React from 'react'


const UserProfile = (props) => {

    return <div>

        <div><img class="profile-image" src={props.profileImgUrl}></img></div>

        <h2 class="name"></h2>
        <p class="desc"></p>
    </div>

}