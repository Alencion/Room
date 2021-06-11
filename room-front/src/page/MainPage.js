import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import UserApi from '../api/UserApi'
import Header from '../component/Header'
import { ACCESS_TOKEN } from '../constant'

const MainPage = () => {
  const [user, setUser] = useState()

  useEffect(() => {
    if (localStorage.getItem(ACCESS_TOKEN)) {
      UserApi.getUserProfile().then(res => {
        setUser(res)
      })
    }
  }, [])

  return (
    <>
      <Header currentUser={user} />

      <PageStyle>
        <CenterWrapper>MainPage</CenterWrapper>
      </PageStyle>
    </>
  )
}

const PageStyle = styled.div`
  width: 100%;
  height: 100%;
`
const CenterWrapper = styled.div`
  display: flex;
  width: 1200px;
  margin: 0 auto;
`
export default MainPage
