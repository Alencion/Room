import { faTimes } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ChatAPi from '../../api/ChatAPi'
import { COLOR } from '../../constant/style'
import Icon from '../../presenter/icon/Icon'
import RightWrapper from '../../presenter/wrapper/RightWrapper'

const ChatThread = ({ setShowThread, selectChatId }) => {
  const [, setContents] = useState([])
  const [message, setMessage] = useState('')

  useEffect(() => {
    ChatAPi.fetchThread(selectChatId).then(res => {
      setContents(res)
    })
  }, [selectChatId])

  const setChatInputHeight = target => {
    target.style.height = 0
    target.style.height = target.scrollHeight + 'px'
  }

  const onEnterDown = e => {
    if (e.key === 'Enter' && message !== '') {
      // sendChatMessage(user.id, message)
      setMessage('')
    }
  }

  return (
    <ChatThreadWrapper>
      <ChatThreadHeader>
        Thread
        <RightWrapper onClick={() => setShowThread(false)}>
          <Icon icon={faTimes} color={COLOR.GREY} />
        </RightWrapper>
      </ChatThreadHeader>
      <ChatThreadContents>
        <ThreadContainer></ThreadContainer>
        <ThreadInputBox>
          <ChatInput
            type="text"
            placeholder="Click here to type a thread message."
            value={message}
            onChange={e => {
              if (e.target.value !== '\n') {
                setMessage(e.target.value)
              }
              setChatInputHeight(e.target)
            }}
            onKeyDown={e => onEnterDown(e)}
          />
        </ThreadInputBox>
      </ChatThreadContents>
    </ChatThreadWrapper>
  )
}

const ChatThreadWrapper = styled.div`
  width: 500px;
  border-left: 1px solid ${COLOR.SEPERATOR_COLOR};
`

const ChatThreadHeader = styled.div`
  display: flex;
  align-items: center;
  padding-left: 12px;
  padding-right: 12px;
  height: 47px;
  width: 499px;
  border-bottom: 1px solid ${COLOR.SEPERATOR_COLOR};

  & i {
    font-size: 30px;

    & > svg {
      transition: 0.5s;
    }

    :hover {
      cursor: pointer;

      & > svg {
        color: ${COLOR.BLACK};
      }
    }
  }
`

const ChatThreadContents = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 47px);
`

const ThreadContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  overflow-y: scroll;
  background: ${COLOR.LIGHT_GREY};
  border-bottom: 1px solid ${COLOR.SEPERATOR_COLOR};

  padding: 10px 0;
  align-items: flex-end;
  align-content: end;
`

const ThreadInputBox = styled.div`
  margin-top: auto;
  display: inline-flex;
  padding: 15px;
  height: 200px;

  border-top: 1px solid ${COLOR.LIGHT_GREY};
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

export default ChatThread
