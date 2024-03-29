import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import RoomApi from '../api/RoomApi'
import UserApi from '../api/UserApi'
import Header from '../component/Header'
import RoomCard from '../component/RoomCard'
import { ACCESS_TOKEN } from '../constant'
import { COLOR } from '../constant/style'
import NoBorderBtn from '../presenter/button/NoBorderBtn'
import PageWrapper from '../presenter/wrapper/PageWrapper'

const MainPage = () => {
  const history = useHistory()
  const [user, setUser] = useState()
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    if (localStorage.getItem(ACCESS_TOKEN)) {
      UserApi.getUserProfile()
        .then(res => {
          setUser(res)
          return RoomApi.fetchRooms(res.id)
        })
        .then(res => {
          setRooms(res)
        })
    }
  }, [])

  const LogoutHandle = () => {
    setUser(undefined)
  }

  return (
    <>
      <Header currentUser={user} LogoutHandle={LogoutHandle} />

      <PageWrapper>
        <CenterWrapper>
          {user && (
            <ContentsWrapper>
              <ContentTitle id="participating-room">참여중인 룸</ContentTitle>
              <div className="buttons">
                <NoBorderBtn
                  onClick={() => {
                    history.push('/room')
                  }}
                  value="룸 생성하기"
                />
              </div>

              <Contents
                style={
                  rooms.length === 0
                    ? {
                        alignItems: 'center',
                        justifyContent: 'center',
                      }
                    : {}
                }
              >
                {rooms.length === 0 ? (
                  <p>
                    참여중인 룸이 없어요 ㅠㅠ <br /> 룸을 만들러 가볼까요?
                  </p>
                ) : (
                  <RoomCardList>
                    {rooms.map(room => (
                      <RoomCard key={room.id} room={room} />
                    ))}
                  </RoomCardList>
                )}
              </Contents>
            </ContentsWrapper>
          )}
        </CenterWrapper>
      </PageWrapper>
    </>
  )
}

const CenterWrapper = styled.div`
  display: flex;
  width: 1200px;
  margin: 0 auto;
`

const ContentsWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 20px;

  & > .buttons {
    position: absolute;
    top: 0;
    right: 20px;
  }
`
const Contents = styled.div`
  display: flex;
  background: ${COLOR.LIGHT_GREY};
  width: 100%;
  height: 200px;
  margin-top: 20px;
  border-radius: 5px;

  & > p {
    text-align: center;
  }
`
const ContentTitle = styled.h3`
  margin-left: 20px;
`

const RoomCardList = styled.div`
  display: flex;
  align-items: center;
`

export default MainPage
