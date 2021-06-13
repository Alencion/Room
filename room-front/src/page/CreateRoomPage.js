import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import UserApi from '../api/UserApi'
import { ACCESS_TOKEN } from '../constant'
import { COLOR } from '../constant/style'
import PrimaryBtn from '../presenter/button/PrimaryBtn'
import PrimaryInput from '../presenter/input/PrimaryInput'
import PageWrapper from '../presenter/wrapper/PageWrapper'

const CreateRoomPage = () => {
  const [user, setUser] = useState()
  const [room, setRoom] = useState({
    title: '',
    description: '',
    isPublic: true,
  })
  const [createDisabled, setCreateDisabled] = useState(true)

  useEffect(() => {
    if (localStorage.getItem(ACCESS_TOKEN)) {
      UserApi.getUserProfile().then(res => {
        setUser(res)
      })
    }
  }, [])

  useEffect(() => {
    isCreatedDisabled(room.title)
  }, [room])

  const isCreatedDisabled = title => {
    if (title.length > 0) {
      setCreateDisabled(false)
    } else {
      setCreateDisabled(true)
    }
  }

  return (
    <>
      <PageWrapper>
        <CreateRoomWrapper>
          <PageTitle>새로운 룸 생성하기</PageTitle>
          <FlexWrapper>
            <VerticalWrapper>
              <InputTitle htmlFor="room-owner">소유자</InputTitle>
              {user && (
                <PrimaryInput
                  id="room-owner"
                  type="text"
                  value={user.name}
                  disabled={true}
                />
              )}
            </VerticalWrapper>
            <VerticalWrapper>
              <Seperator>/</Seperator>
            </VerticalWrapper>
            <VerticalWrapper>
              <InputTitle htmlFor="room-title">룸 이름</InputTitle>
              <PrimaryInput
                id="room-title"
                type="text"
                value={room.title}
                onChange={e => setRoom({ ...room, title: e.target.value })}
              />
            </VerticalWrapper>
          </FlexWrapper>
          <InputWrapper>
            <InputTitle htmlFor="room-description">설명</InputTitle>
            <PrimaryInput
              id="room-description"
              type="text"
              value={room.description}
              onChange={e => setRoom({ ...room, description: e.target.value })}
            />
          </InputWrapper>
          <InputWrapper>
            <Radio>
              <input
                type="radio"
                checked={room.isPublic}
                onChange={e =>
                  e.target.checked && setRoom({ ...room, isPublic: true })
                }
              />
              Public
            </Radio>
            <Radio>
              <input
                type="radio"
                checked={!room.isPublic}
                onChange={e =>
                  e.target.checked && setRoom({ ...room, isPublic: false })
                }
              />
              Private
            </Radio>
          </InputWrapper>
          <PrimaryBtn
            disabled={createDisabled}
            onClick={() => console.log(room)}
          >
            생성
          </PrimaryBtn>
        </CreateRoomWrapper>
      </PageWrapper>
    </>
  )
}

const CreateRoomWrapper = styled.div`
  display: flex;
  margin: 20px auto 0;
  flex-direction: column;
  width: 500px;
`

const PageTitle = styled.h2``

const FlexWrapper = styled.div`
  margin-top: 15px;
  padding: 20px 0 0;
  display: flex;
  border-top: 1px solid ${COLOR.SEPERATOR_COLOR};
`

const Seperator = styled.p`
  padding-top: 32px;
  margin: 5px;
`
const VerticalWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const InputWrapper = styled.div`
  margin-top: 15px;
`

const InputTitle = styled.label`
  display: block;
`

const Radio = styled.label`
  display: block;
  padding: 5px;

  & > input[type='radio'] {
    margin: 0 10px;
  }
`
export default CreateRoomPage
