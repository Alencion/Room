import { faEdit } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import RoomApi from '../api/RoomApi'
import UserApi from '../api/UserApi'
import SideNav from '../component/SideNav'
import { ACCESS_TOKEN } from '../constant'
import { COLOR } from '../constant/style'
import Icon from '../presenter/icon/Icon'
import RightWrapper from '../presenter/wrapper/RightWrapper'

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
            showNav={showNav}
            setShowNav={setShowNav}
            tabIndex={tabIndex}
            setTabIndex={setTabIndex}
          />
        )}
        <ContentsWrapper showNav={showNav}>
          <BorderWrapper>
            {room && (
              <ContentsCenterWrapper>
                <RoomHeader>
                  <RoomTitle>{room.title}</RoomTitle>
                  {tabIndex === 0 && (
                    <RightWrapper>
                      <Icon icon={faEdit} color={COLOR.GREY} size={'1.5rem'} />
                    </RightWrapper>
                  )}
                </RoomHeader>
              </ContentsCenterWrapper>
            )}
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
  height: 80px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 18%);
`

const RoomHeader = styled.div`
  display: flex;
  align-items: center;
`

const RoomTitle = styled.div`
  font-size: 2.3rem;
`

const ContentsCenterWrapper = styled.div`
  margin: 0 auto;
  width: 1200px;
`

export default RoomPage
