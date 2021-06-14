import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import RoomApi from '../api/RoomApi'
import UserApi from '../api/UserApi'
import SideNav from '../component/SideNav'
import { ACCESS_TOKEN } from '../constant'

const RoomPage = ({ match }) => {
  const [user, setUser] = useState()
  const [room, setRoom] = useState()

  useEffect(() => {
    if (localStorage.getItem(ACCESS_TOKEN)) {
      UserApi.getUserProfile().then(res => {
        setUser(res)
      })
      RoomApi.fetchRoom(match.params.userId, match.params.roomId).then(res => {
        console.log(res)
        setRoom(res)
      })
    }
  }, [])

  return (
    <>
      <FlexWrapper>
        <SideNav room={room} />
        <ContentsWrapper>Contents</ContentsWrapper>
      </FlexWrapper>
    </>
  )
}

const FlexWrapper = styled.div`
  display: flex;
  height: 100%;
`

const ContentsWrapper = styled.div`
  width: calc(100% - 300px);
  height: 100%;
`

export default RoomPage
