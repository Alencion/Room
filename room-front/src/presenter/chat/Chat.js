import React from 'react'
import styled from 'styled-components'
import { COLOR } from '../../constant/style'

const ChatPresenter = ({ message }) => {
  return (
    <>
      <ChatWrapper>
        <AvartarWrapper>
          <img src={message.sender.picture + '&s=70'} alt={'user profile'} />
        </AvartarWrapper>
        <MessageWrapper>
          <UserName>{message.sender.nickname}</UserName>
          <Message>{message.content}</Message>
        </MessageWrapper>
      </ChatWrapper>
    </>
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
  font-weight: bold;
  margin-bottom: 5px;
`

const Message = styled.div``

export default ChatPresenter
