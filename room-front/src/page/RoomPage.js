import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import RoomApi from '../api/RoomApi'
import UserApi from '../api/UserApi'
import SideNav from '../component/SideNav'
import { ACCESS_TOKEN } from '../constant'

const RoomPage = ({ match }) => {
  const [user, setUser] = useState()
  const [room, setRoom] = useState()
  const [tabIndex, setTabIndex] = useState(0)

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

  const contents = {
    0: <div>RoomInfo</div>,
    1: <div>Calender</div>,
    2: <div>Chat</div>,
    3: <div>Wiki</div>,
  }

  return (
    <>
      <FlexWrapper>
        {user && room && (
          <SideNav
            user={user}
            room={room}
            tabIndex={tabIndex}
            setTabIndex={setTabIndex}
          />
        )}
        <ContentsWrapper>
          <RoomHeader>
            {room && (
              <ContentsCenterWrapper>{room.title}</ContentsCenterWrapper>
            )}
          </RoomHeader>
          {contents[tabIndex]}
        </ContentsWrapper>
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

const RoomHeader = styled.div``

const ContentsCenterWrapper = styled.div`
  margin: 0 auto;
  width: 1200px;
`

export default RoomPage
