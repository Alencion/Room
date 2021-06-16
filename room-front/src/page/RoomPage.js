import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import RoomApi from '../api/RoomApi'
import UserApi from '../api/UserApi'
import RoomInfo from '../component/RoomPage/RoomInfo'
import SideNav from '../component/SideNav'
import { ACCESS_TOKEN } from '../constant'
import { COLOR } from '../constant/style'
import { roomTab } from '../model/Room'

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
        console.log(res)
        setRoom(res)
      })
    }
  }, [])

  const contents = {
    0: <RoomInfo room={room} />,
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
            showNav={showNav}
            setShowNav={setShowNav}
            tabIndex={tabIndex}
            setTabIndex={setTabIndex}
          />
        )}
        <ContentsWrapper showNav={showNav}>
          <BorderWrapper>
            <RoomHeader>
              <RoomTitle>{roomTab[tabIndex]}</RoomTitle>
            </RoomHeader>
          </BorderWrapper>
          <ContentsCenterWrapper>{contents[tabIndex]}</ContentsCenterWrapper>
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
  transition: 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: ${props => (props.showNav ? 'calc(100% - 250px)' : '100%')};
  margin-left: ${props => (props.showNav ? '250px' : '0')};
  height: 100%;
`

const BorderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 18%);
`

const RoomHeader = styled.div`
  display: flex;
  align-items: center;

  & i {
    padding: 5px;
    border-radius: 5px;
    display: flex;
    align-items: center;

    :hover {
      background: ${COLOR.LIGHT_GREY};
      cursor: pointer;

      & > svg {
        color: ${COLOR.LIGHT_BLUE};
      }
    }
  }
`

const RoomTitle = styled.div`
  margin-left: 50px;
  font-size: 1rem;
`

const ContentsCenterWrapper = styled.div`
  margin: 0 auto;
  width: 900px;
`

export default RoomPage
