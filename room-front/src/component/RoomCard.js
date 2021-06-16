import { faLock, faLockOpen, faUser } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { COLOR } from '../constant/style'
import Icon from '../presenter/icon/Icon'

const RoomCard = ({ userId, room }) => {
  const history = useHistory()

  const owner = () => {
    return room.participants.find(user => user.role === 'owner').user
  }
  return (
    <RoomCardWrapper
      onClick={() => history.push(`/room/${owner().id}/${room.id}`)}
    >
      <RoomTitle $textLength={room.title.length}>{room.title}</RoomTitle>

      <RoomInfoBox>
        <FlexWrapper>
          <ColorText isPublic={room.public}>
            <Icon
              icon={room.public ? faLockOpen : faLock}
              color={room.public ? COLOR.LIGHT_BLUE : COLOR.GREY}
              size={'0.8rem'}
              padding={'0 5px 0 0'}
            />

            {room.public ? 'Public' : 'Private'}
          </ColorText>

          <RightDiv>
            <Icon icon={faUser} color={'grey'} size={'0.8rem'} />
            {room.participants.length}
          </RightDiv>
        </FlexWrapper>
        <RoomDescription>{room.description}</RoomDescription>
      </RoomInfoBox>
    </RoomCardWrapper>
  )
}

const RoomCardWrapper = styled.div`
  margin-left: 20px;
  width: 170px;
  height: 170px;
  position relative;

  background: url('/image/door1.png');
  background-size: cover;
  background-repeat: no-repeat;

  text-align: center;

  :hover {
    cursor: pointer;
  }
`

const RoomTitle = styled.div`
  display: inline-block;
  margin: 20px 0;
  padding: 5px 20px;
  border: 1px solid ${COLOR.BORDER_COLOR};
  border-radius: 4px;
  background: #fff;
  text-align: center;
  font-weight: bold;

  font-size: ${props => (props.$textLength > 10 ? '0.8rem' : '1rem')};
`

const RoomInfoBox = styled.div`
  padding: 5px 10px;
  width: 100%;
  height: 70px;
  position: absolute;
  bottom: 0;
  border: 1px solid ${COLOR.BORDER_COLOR};
  border-radius: 4px;
  background: #fff;
  text-align: left;
`

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3px;
`
const ColorText = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
  color: ${props => (props.isPublic ? COLOR.LIGHT_BLUE : COLOR.GREY)};
`

const RightDiv = styled.div`
  margin-left: auto;
  font-size: 0.8rem;
  color: ${COLOR.LIGHT_BLACK};

  & > i {
    margin-right: 5px;
  }
`

const RoomDescription = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

export default RoomCard
