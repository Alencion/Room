import React from 'react'
import { Link, useHistory } from 'react-router-dom'

const HeaderProfile = () => {
  const history = useHistory()

  return (
    <>
      <img src="#" />
      <p>name</p>
      <Link to="/mypage">마이페이지</Link>
    </>
  )
}

export default HeaderProfile
