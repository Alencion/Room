import React from 'react'
import styled from 'styled-components'

const ProfileImg = ({ image_path }) => {
  return (
    <UserProfileImg src={image_path} alt={'/public/image/user_prifile.png'} />
  )
}

const UserProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

export default ProfileImg
