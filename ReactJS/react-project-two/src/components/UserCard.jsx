import React from 'react'
import userImg from '../assets/userImg.png'
import '../components/UserCard.css'

const UserCard = (props) => {
  return (
    <div className='user-container'>
      <p id='user-name'>{props.name}</p>
      <img id='user-img' src={userImg} alt="Abhijeet" />
      <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default UserCard
