import React from 'react'
import styled from 'styled-components'
import { COLOR } from '../../constant/style'

const ChatPresenter = ({ message }) => {
  return (
    <>
      <ChatWrapper>
        <AvartarWrapper>그림</AvartarWrapper>
        <MessageWrapper>
          <UserName>{message.userId}</UserName>
          <Message>{message.content}</Message>
        </MessageWrapper>
      </ChatWrapper>
    </>
  )
}

const ChatWrapper = styled.div`
  display: flex;
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
`

const MessageWrapper = styled.div`
  width: calc(100% - 60px);
`

const UserName = styled.p`
  font-weight: bold;
`

const Message = styled.div``

export default ChatPresenter
