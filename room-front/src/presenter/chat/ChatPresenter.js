import React from 'react'
import styled from 'styled-components'
import { COLOR } from '../../constant/style'

const ChatPresenter = ({ message }) => {
  const timeAgo = () => {
    console.log(message)
    const today = new Date()
    const timeValue = new Date(message.createdAt)

    const betweenTime = Math.floor(
      (today.getTime() - timeValue.getTime()) / 1000 / 60,
    )
    if (betweenTime < 1) return '방금전'
    if (betweenTime < 60) {
      return `${betweenTime}분전`
    }

    const betweenTimeHour = Math.floor(betweenTime / 60)
    if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간전`
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24)
    if (betweenTimeDay < 365) {
      return `${betweenTimeDay}일전`
    }

    return `${Math.floor(betweenTimeDay / 365)}년전`
  }

  return (
    <ChatWrapper>
      <AvartarWrapper>
        <img src={message.sender.picture + '&s=70'} alt={'user profile'} />
      </AvartarWrapper>
      <MessageWrapper>
        <UserName>
          <b>{message.sender.nickname}</b>
          <span>{timeAgo()}</span>
        </UserName>
        <Message>{message.content}</Message>
      </MessageWrapper>
    </ChatWrapper>
  )
}

const ChatWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 40px;
  padding: 10px 0;
  border-top: 1px solid ${COLOR.SEPERATOR_COLOR};
  position: relative;

  :last-child {
    border-bottom: 1px solid ${COLOR.SEPERATOR_COLOR};
  }

  & > * {
    font-size: 1rem;
  }
`

const AvartarWrapper = styled.div`
  width: 60px;
  padding: 0 10px;

  & > img {
    width: 35px;
    height: 35px;
    border-radius: 4px;
    margin-right: 10px;
  }
`

const MessageWrapper = styled.div`
  width: calc(100% - 60px);
`

const UserName = styled.p`
  margin-bottom: 5px;

  & > span {
    margin-left: 10px;
    font-size: 0.7rem;
    color: ${COLOR.LIGHT_BLACK};
  }
`

const Message = styled.div``

export default ChatPresenter
