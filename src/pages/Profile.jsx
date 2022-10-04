import React from 'react'
import Content from '../components/Content'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Posts from '../components/Posts'
import ProfileInfo from '../components/ProfileInfo'

const Profile = (props) => {
  
    return (
        <>
            <ProfileInfo />
            <Posts posts={props.posts}/>
        </>

    )
}

export default Profile