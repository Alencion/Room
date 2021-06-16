import React, { useState } from 'react'
import styled from 'styled-components'
import { COLOR } from '../../constant/style'
import RoomHeader from '../../presenter/header/RoomHeader'
import PageWrapper from '../../presenter/wrapper/PageWrapper'
import ChatThread from './ChatThread'

const Chat = ({ user, room }) => {
  const [showAddOn, setShowAddOn] = useState(true)
  const setChatInputHeight = target => {
    const lineSeperateCount = (target.value.match(/\n/g) || []).length

    if (lineSeperateCount > 1) {
      target.style.height = 44 + (lineSeperateCount - 1) * 22 + 'px'
    } else {
      target.style.height = 0
    }
  }

  return (
    <>
      {room && (
        <>
          <PageWrapper>
            <RoomHeader title={'Chat'} />
            <ContentsCenterWrapper>
              <ChatWrapper>
                <ChatContainer></ChatContainer>
                {user && (
                  <ChatInputBox>
                    <img src={user.picture + '&s=70'} alt={'user profile'} />
                    <ChatInput
                      type="text"
                      placeholder="Click here to type a chat message."
                      onChange={e => setChatInputHeight(e.target)}
                    />
                  </ChatInputBox>
                )}
              </ChatWrapper>
            </ContentsCenterWrapper>
          </PageWrapper>
          {showAddOn && <ChatThread setShowAddOn={setShowAddOn} />}
        </>
      )}
    </>
  )
}

const ContentsCenterWrapper = styled.div`
  margin: 0 auto;
  width: 1200px;
  height: calc(100% - 45px);
`

const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const ChatInputBox = styled.div`
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

export default Chat
