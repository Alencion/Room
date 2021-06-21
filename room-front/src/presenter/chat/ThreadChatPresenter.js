import React from 'react'
import styled from 'styled-components'
import { COLOR } from '../../constant/style'
import moment from 'moment'
import 'moment/locale/ko'

const ThreadChatPresenter = ({ message }) => {
  const time = () => {
    return moment(message.createdAt).format('YYYY-MM-DD LT')
  }

  return (
    <ChatWrapper>
      <MessageWrapper>
        <UserName>
          <b>{message.sender.nickname}</b>
          <span>{time()}</span>
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
  padding: 10px 0 20px;
  border-bottom: 1px solid ${COLOR.SEPERATOR_COLOR};
  position: relative;

  & > * {
    font-size: 1rem;
  }

  :hover > .pop {
    display: flex;
  }
`

const MessageWrapper = styled.div`
  padding: 0 10px;
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

export default ThreadChatPresenter
