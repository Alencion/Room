import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import ChatAPi from '../../api/ChatAPi'
import { COLOR } from '../../constant/style'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import useSocket from '../../hooks/useSocket'
import ChatPresenter from '../../presenter/chat/ChatPresenter'
import RoomHeader from '../../presenter/header/RoomHeader'
import PageWrapper from '../../presenter/wrapper/PageWrapper'
import ChatThread from './ThreadChat'

const Chat = ({ user, room }) => {
  const [showThread, setShowThread] = useState(false)
  const [selectChat, setSelectChat] = useState()
  const [message, setMessage] = useState('')
  const [contents, setContents] = useState({ content: [] })
  const page = useRef(1)
  const wrapperRef = useRef()
  const targetRef = useRef()

  const sendChatMessage = useSocket(
    setContents,
    '/chat',
    '/topic/chat/room/' + room.id,
    newMessage => {
      setContents(prev => {
        return { ...prev, content: [...prev.content, newMessage] }
      })
    },
  )

  useIntersectionObserver({
    root: wrapperRef.current,
    target: targetRef.current,
    onIntersect: ([{ isIntersecting }]) => {
      if (isIntersecting && page.current < contents.totalPages) {
        page.current++
        ChatAPi.fetchChats(room.id, page.current).then(res => {
          res.content = res.content.sort((c1, c2) => c1.id - c2.id)
          setContents({
            ...contents,
            content: [...res.content, ...contents.content],
          })
        })
      }
    },
  })

  useEffect(() => {
    ChatAPi.fetchChats(room.id, page.current).then(res => {
      res.content = res.content.sort((c1, c2) => c1.id - c2.id)
      setContents(res)
    })
  }, [room.id])

  useEffect(() => {
    wrapperRef.current.scrollTop = wrapperRef.current.scrollHeight
  }, [contents])

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

  const openThread = message => {
    setShowThread(true)
    setSelectChat(message)
  }

  return (
    <>
      {room && (
        <>
          <PageWrapper>
            <RoomHeader title={'Chat'} />
            <ContentsCenterWrapper>
              <ChatWrapper>
                <BottomBox ref={wrapperRef}>
                  <div ref={targetRef}></div>
                  <ChatContainer>
                    {contents.content.map((message, index) => (
                      <ChatPresenter
                        key={index}
                        prevMessage={contents.content[index - 1]}
                        message={message}
                        openThread={openThread}
                      />
                    ))}
                  </ChatContainer>
                </BottomBox>
                {user && (
                  <ChatInputBox>
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
                  </ChatInputBox>
                )}
              </ChatWrapper>
            </ContentsCenterWrapper>
          </PageWrapper>
          {showThread && (
            <ChatThread setShowThread={setShowThread} chat={selectChat} />
          )}
        </>
      )}
    </>
  )
}

const ContentsCenterWrapper = styled.div`
  margin: 0 auto;
  min-width: 600px;
  max-width: 1200px;
  height: calc(100% - 45px);
  padding: 0 20px;
`

const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const BottomBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
  margin-top: 3px;
  overflow-y: scroll;
  padding-top: 20px;
`

const ChatContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  margin-top: auto;
  align-content: end;
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
