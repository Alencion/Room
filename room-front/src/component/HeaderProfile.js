import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { COLOR } from '../constant/style'
import ProfileImg from '../presenter/img/ProfileImg'

const HeaderProfile = ({ currentUser }) => {
  return (
    <>
      {currentUser && (
        <>
          <ProfileImg image_path={currentUser.picture} />
          <p>
            <MypageLink to="/mypage">{currentUser.nickname}</MypageLink> 님
            환영합니다.
          </p>
        </>
      )}
    </>
  )
}

const MypageLink = styled(Link)`
  text-decoration: underline;
  color: ${COLOR.LIGHT_BLUE};
`

export default HeaderProfile
