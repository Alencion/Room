import React from 'react'
import styled from 'styled-components'
import { COLOR } from '../../constant/style'

const ChatInputBox = ({ user, room, message, setMessage, sendChatMessage }) => {
  const setChatInputHeight = target => {
    target.style.height = 0
    target.style.height = target.scrollHeight + 'px'
  }

  const onEnterDown = e => {
    if (e.key === 'Enter' && message !== '') {
      sendChatMessage({ userId: user.id, roomId: room.id, content: message })
      setMessage('')
    }
  }

  return (
    <>
      {user && (
        <InputBox>
          <img src={user.picture + '&s=70'} alt={'user profile'} />
          <ChatInput
            type="text"
            placeholder="Click here to type a chat message."
            value={message}
            onChange={e => {
              if (e.target.value !== '\n') {
                setMessage(e.target.value)
              }
              setChatInputHeight(e.target)
            }}
            onKeyDown={e => onEnterDown(e)}
          />
        </InputBox>
      )}
    </>
  )
}

const InputBox = styled.div`
  margin-top: auto;
  margin-bottom: 15px;
  display: inline-flex;
  padding: 20px;

  border: 1px solid ${COLOR.LIGHT_GREY};
  border-radius: 12px;
  box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.25);

  & > img {
    width: 35px;
    height: 35px;
    border-radius: 4px;
    margin-right: 15px;
  }
`

const ChatInput = styled.textarea`
  width: 100%;
  min-height: 44px;
  max-height: 300px;
  border: none;
  resize: none;
  font-size: 1.2em;
  line-height: 1.38em;

  :focus-visible {
    outline: none;
  }
`

export default ChatInputBox
