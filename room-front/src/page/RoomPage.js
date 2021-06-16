import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import RoomApi from '../api/RoomApi'
import UserApi from '../api/UserApi'
import Chat from '../component/RoomPage/Chat'
import RoomInfo from '../component/RoomPage/RoomInfo'
import SideNav from '../component/SideNav'
import { ACCESS_TOKEN } from '../constant'

const RoomPage = ({ match }) => {
  const [user, setUser] = useState()
  const [room, setRoom] = useState()

  const [showNav, setShowNav] = useState(true)
  const [tabIndex, setTabIndex] = useState(0)

  useEffect(() => {
    if (localStorage.getItem(ACCESS_TOKEN)) {
      UserApi.getUserProfile().then(res => {
        setUser(res)
      })
      RoomApi.fetchRoom(match.params.userId, match.params.roomId).then(res => {
        setRoom(res)
      })
    }
  }, [])

  const contents = {
    0: <RoomInfo room={room} />,
    1: <div>calender</div>,
    2: <Chat user={user} room={room} />,
    3: <div>Wiki</div>,
  }

  return (
    <>
      <FlexWrapper>
        {user && room && (
          <SideNav
            user={user}
            room={room}
            showNav={showNav}
            setShowNav={setShowNav}
            tabIndex={tabIndex}
            setTabIndex={setTabIndex}
          />
        )}
        <ContentsWrapper showNav={showNav}>
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
  display: flex;
  transition: 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: ${props => (props.showNav ? 'calc(100% - 250px)' : '100%')};
  margin-left: ${props => (props.showNav ? '250px' : '0')};
  height: 100%;
`

export default RoomPage
